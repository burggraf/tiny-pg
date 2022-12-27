#!/usr/bin/env /bin/sh
printf "HTTP/1.0 200 OK\r\n"
printf "Content-type: text/plain\r\n\r\n"

#printenv | grep ^HTTP_ 
# get post data
RAW_DATA="$(cat)"
DATA=$(echo -n "$RAW_DATA" | head -1 | tr -d '\r\n');

# parse posted $DATA
VERSION=`echo $DATA | cut -d'&' -f1 | cut -d'=' -f2`
POSTGRES_PASSWORD=`echo $DATA | cut -d'&' -f2 | cut -d'=' -f2`
# convert ' to '' for psql
POSTGRES_PASSWORD=`echo $POSTGRES_PASSWORD | sed "s/'/''/g"`

printf "Installing PostgreSQL $VERSION...\r\n"

apk update
apk add postgresql$VERSION
mkdir -p /run/postgresql
chown postgres:postgres /run/postgresql/
mkdir -p /var/lib/postgresql/data
chown postgres:postgres /var/lib/postgresql/data
            
su postgres -c 'initdb -D /var/lib/postgresql/data' > /dev/nul
echo "host all all 0.0.0.0/0 md5" >> /var/lib/postgresql/data/pg_hba.conf
echo "host replication repuser 0.0.0.0/0 md5" >> /var/lib/postgresql/data/pg_hba.conf
echo "listen_addresses = '*'" >> /var/lib/postgresql/data/postgresql.conf
#echo "wal_level = replica" >> /var/lib/postgresql/data/postgresql.conf
#echo "max_wal_senders = 10" >> /var/lib/postgresql/data/postgresql.conf
#echo "wal_keep_size = 32" >> /var/lib/postgresql/data/postgresql.conf
#echo "synchronous_commit = off" >> /var/lib/postgresql/data/postgresql.conf
#echo "synchronous_standby_names = '*'" >> /var/lib/postgresql/data/postgresql.conf
su postgres -c 'pg_ctl start -D /var/lib/postgresql/data' > /dev/nul
#psql -U postgres -c "alter role postgres with password '$POSTGRES_PASSWORD'"
#psql -U postgres -c "create role repuser with password '$REPUSER_PASSWORD' replication login;"
printf "PostgreSQL 15 installed and started\r\n"
echo ""
printf "setting postgres password...\r\n"
psql -U postgres -c "alter role postgres with password '$POSTGRES_PASSWORD';"
echo ""
echo "Script completed"