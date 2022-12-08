#!/bin/sh
FILE=/var/lib/postgresql/data/postgresql.conf
if [ -f "$FILE" ]; then
    # postgresql is already initialized, just start it
    su postgres -c 'pg_ctl start -D /var/lib/postgresql/data'
    psql -U postgres && /bin/sh
else 
    # postgresql is not initialized, initialize it
    su postgres -c 'initdb -D /var/lib/postgresql/data'
    # set up access to the outside world
    echo "host all all 0.0.0.0/0 md5" >> /var/lib/postgresql/data/pg_hba.conf && \
    echo "listen_addresses='*'" >> /var/lib/postgresql/data/postgresql.conf && \
    # start postgresql
    su postgres -c 'pg_ctl start -D /var/lib/postgresql/data'
    # set the default password for the postgres user
    psql -U postgres -c "alter role postgres with password 'postgres'"
    # launch psql
    psql -U postgres && /bin/sh
fi
