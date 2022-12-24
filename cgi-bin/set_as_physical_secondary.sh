#!/usr/bin/env /bin/sh
printf "HTTP/1.0 200 OK\r\n"
printf "Content-type: text/plain\r\n\r\n"

#printenv | grep ^HTTP_ 
# $1: REPUSER_PASSWORD
# $2: HOST_IP
# $3: HOST_PORT

printf "Setting server as physical SECONDARY...\r\n"
printf "Stopping PostgreSQL...\r\n"
/http/cgi-bin/postgresql_control.sh stop
printf "Removing old data...\r\n"
rm -rf /var/lib/postgresql/data/*
printf "Running pg_basebackup to sync data from primary server...\r\n"
PGPASSWORD="$1" pg_basebackup -R -h $2 -p $3 -U repuser -D /var/lib/postgresql/data -P
printf "Configuring postgresql.conf...\r\n"
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf listen_addresses "'*'"
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf hot_standby on
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf primary_conninfo "'host=$2 port=$3 user=repuser'"
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf wal_level replica
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf max_wal_senders 10
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf wal_keep_size 32
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf synchronous_commit off
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf synchronous_standby_names "'*'"
printf "Starting PostgreSQL...\r\n"
/http/cgi-bin/postgresql_control.sh start
echo "Script completed"