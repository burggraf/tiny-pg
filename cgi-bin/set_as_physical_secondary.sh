#!/usr/bin/env /bin/sh
printf "HTTP/1.0 200 OK\r\n"
printf "Content-type: text/plain\r\n\r\n"

#printenv | grep ^HTTP_ 
# $1: REPUSER_PASSWORD
# $2: HOST_IP
# $3: HOST_PORT
# get post data
RAW_DATA="$(cat)"
DATA=$(echo -n "$RAW_DATA" | head -1 | tr -d '\r\n');

# parse $QUERY_STRING
REPUSER_PASSWORD=`echo $DATA | cut -d'&' -f1 | cut -d'=' -f2`
HOST_IP=`echo $DATA | cut -d'&' -f2 | cut -d'=' -f2`
HOST_PORT=`echo $DATA | cut -d'&' -f3 | cut -d'=' -f2`

printf "REPUSER_PASSWORD: $REPUSER_PASSWORD\r\n"
printf "HOST_IP: $HOST_IP\r\n"
printf "HOST_PORT: $HOST_PORT\r\n"

printf "Setting server as physical SECONDARY...\r\n"

printf "Stopping PostgreSQL...\r\n"
su postgres -c 'pg_ctl stop -D /var/lib/postgresql/data' > /dev/nul
printf "Removing old data...\r\n"
rm -rf /var/lib/postgresql/data/*
printf "Running pg_basebackup to sync data from primary server...\r\n"
PGPASSWORD="$REPUSER_PASSWORD" pg_basebackup -R -h $HOST_IP -p $HOST_PORT -U repuser -D /var/lib/postgresql/data -P
printf "Configuring postgresql.conf...\r\n"
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf listen_addresses "'*'"
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf hot_standby on
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf primary_conninfo "'host=$2 port=$3 user=repuser'"
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf wal_level replica
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf max_wal_senders 10
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf wal_keep_size 32
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf synchronous_commit off
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf synchronous_standby_names "'*'"

printf "Changing owner of /var/lib/postgresql/data to postgres:postgres...\r\n"
chown -R postgres:postgres /var/lib/postgresql/data
printf "Changing permissions of /var/lib/postgresql/data to 0700...\r\n"
chmod 0700 /var/lib/postgresql/data

printf "Starting PostgreSQL...\r\n"
su postgres -c 'pg_ctl start -D /var/lib/postgresql/data' > /dev/nul
echo "Script completed"