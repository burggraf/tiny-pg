#!/usr/bin/env /bin/sh
printf "HTTP/1.0 200 OK\r\n"
printf "Content-type: text/plain\r\n\r\n"

#printenv | grep ^HTTP_ 

printf "Setting server as physical PRIMARY...\r\n"

/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf listen_addresses "'*'"
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf wal_level replica
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf max_wal_senders 10
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf wal_keep_size 32
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf synchronous_commit off
/http/cgi-bin/add_conf_line.sh /var/lib/postgresql/data/postgresql.conf synchronous_standby_names "'*'"

echo "Script completed"