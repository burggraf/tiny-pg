#!/bin/sh
FILE=/var/lib/postgresql/data/postgresql.conf
echo "HOST TYPE: $HOST_TYPE"
echo "$HOST_TYPE" > /HOST_TYPE_$HOST_TYPE
if [ -f "$FILE" ]; then
    # postgresql is already initialized, just start it
    su postgres -c 'pg_ctl start -D /var/lib/postgresql/data'
    psql -U postgres && /bin/sh
else 
    case "$HOST_TYPE" in
        PRIMARY) 
            # postgresql is not initialized, initialize it
            echo "***********************************************************"
            echo "INITIALIZING POSTGRESQL: initdb -D /var/lib/postgresql/data"
            echo "***********************************************************"
            su postgres -c 'initdb -D /var/lib/postgresql/data'
            # set up access to the outside world
            echo "host all all 0.0.0.0/0 md5" >> /var/lib/postgresql/data/pg_hba.conf
            echo "host replication repuser 0.0.0.0/0 md5" >> /var/lib/postgresql/data/pg_hba.conf
            echo "listen_addresses='*'" >> /var/lib/postgresql/data/postgresql.conf
            echo "wal_level = replica" >> /var/lib/postgresql/data/postgresql.conf
            echo "max_wal_senders = 10" >> /var/lib/postgresql/data/postgresql.conf
            echo "wal_keep_size = 32" >> /var/lib/postgresql/data/postgresql.conf
            #echo "synchronous_commit = remote_apply" >> /var/lib/postgresql/data/postgresql.conf
            echo "synchronous_commit = off" >> /var/lib/postgresql/data/postgresql.conf
            echo "synchronous_standby_names = '*'" >> /var/lib/postgresql/data/postgresql.conf
            # start postgresql
            echo "*****************************************************************"
            echo "STARTING POSTGRESQL with pg_ctl start -D /var/lib/postgresql/data"
            echo "*****************************************************************"
            su postgres -c 'pg_ctl start -D /var/lib/postgresql/data'
            # set the default password for the postgres user
            echo "*************************"
            echo "SETTING postgres PASSWORD"
            echo "*************************"
            psql -U postgres -c "alter role postgres with password '$POSTGRES_PASSWORD'"
            echo "************************"
            echo "SETTING repuser PASSWORD"
            echo "************************"
            psql -U postgres -c "create role repuser with password '$REPUSER_PASSWORD' replication login;"
            # launch psql
            echo "**************"
            echo "LAUNCHING PSQL"
            echo "**************"
            psql -U postgres && /bin/sh;;
        SECONDARY)
            echo "***********************************************************"
            echo "INITIALIZING POSTGRESQL: PGPASSWORD="$REPUSER_PASSWORD" pg_basebackup -R -h $HOST_IP -p $HOST_PORT -U repuser -D /var/lib/postgresql/data -P"
            echo "***********************************************************"
            PGPASSWORD="$REPUSER_PASSWORD" pg_basebackup -R -h $HOST_IP -p $HOST_PORT -U repuser -D /var/lib/postgresql/data -P
            echo "host all all 0.0.0.0/0 md5" >> /var/lib/postgresql/data/pg_hba.conf
            #echo "host replication repuser 0.0.0.0/0 md5" >> /var/lib/postgresql/data/pg_hba.conf
            echo "hot_standby=on" >> /var/lib/postgresql/data/postgresql.conf
            echo "listen_addresses='*'" >> /var/lib/postgresql/data/postgresql.conf
            echo "primary_conninfo='host=$HOST_IP port=$HOST_PORT user=repuser'" >> /var/lib/postgresql/data/postgresql.conf
            # echo "wal_level = replica" >> /var/lib/postgresql/data/postgresql.conf
            # echo "max_wal_senders = 10" >> /var/lib/postgresql/data/postgresql.conf
            # echo "wal_keep_size = 32" >> /var/lib/postgresql/data/postgresql.conf
            # echo "synchronous_commit = remote_apply" >> /var/lib/postgresql/data/postgresql.conf
            # echo "synchronous_standby_names = '*'" >> /var/lib/postgresql/data/postgresql.conf
            chown -R postgres:postgres /var/lib/postgresql/data
            chmod 0700 /var/lib/postgresql/data
            # start postgresql
            echo "STARTING POSTGRESQL with pg_ctl start -D /var/lib/postgresql/data"
            su postgres -c 'pg_ctl start -D /var/lib/postgresql/data'
            # launch psql
            echo "LAUNCHING PSQL"
            psql -U postgres && /bin/sh;;
        *) 
            echo "ERROR: unknown HOST_TYPE: $HOST_TYPE";;
    esac
fi
