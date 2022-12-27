#!/usr/bin/env /bin/sh
printf "HTTP/1.0 200 OK\r\n"
printf "Content-type: text/plain\r\n\r\n"

#printenv | grep ^HTTP_ 
# get post data
RAW_DATA="$(cat)"
DATA=$(echo -n "$RAW_DATA" | head -1 | tr -d '\r\n');
# convert ' to '' for psql
DATA=`echo $DATA | sed "s/'/''/g"`

printf "Setting server as physical PRIMARY...\r\n"
printf "configuring /var/lib/postgresql/postgresql.conf...\r\n"
printf "listen_addresses = '*'\r\n"
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf listen_addresses "'*'"
printf "wal_level = replica\r\n"
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf wal_level replica
printf "max_wal_senders = 10\r\n"
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf max_wal_senders 10
printf "wal_keep_size = 32\r\n"
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf wal_keep_size 32
printf "synchronous_commit = off\r\n"
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf synchronous_commit off
printf "synchronous_standby_names = '*'\r\n"
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf synchronous_standby_names "'*'"

#printf "setting postgres password...\r\n"
#psql -U postgres -c "alter role postgres with password '$POSTGRES_PASSWORD'"
printf "setting repuser password...\r\n"
psql -U postgres -c "create role repuser with password '$DATA' replication login;"


echo "Script completed"