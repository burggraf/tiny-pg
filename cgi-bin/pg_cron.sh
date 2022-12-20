#!/usr/bin/env /bin/sh
printf "HTTP/1.0 200 OK\r\n"
printf "Content-type: text/plain\r\n\r\n"

#printenv | grep ^HTTP_ 

printf "Installing pg_cron...\r\n"
apk add pg_cron
printf "adding shared library...\r\n"

#pg_cron
sed -i "s/#shared_preload_libraries/shared_preload_libraries/" /var/lib/postgresql/data/postgresql.conf
sed -i "s/shared_preload_libraries = '\(.*\)'/shared_preload_libraries = '\1,pg_cron'/" /var/lib/postgresql/data/postgresql.conf
sed -i "s/pg_cron,pg_cron/pg_cron/" /var/lib/postgresql/data/postgresql.conf
sed -i "s/pg_cron,pg_cron/pg_cron/" /var/lib/postgresql/data/postgresql.conf
sed -i "s/pg_cron,'/pg_cron'/" /var/lib/postgresql/data/postgresql.conf
printf "Restarting PostgreSQL...\r\n"
su postgres -c "pg_ctl restart -D /var/lib/postgresql/data" > /dev/nul
printf "PostgreSQL restarted\r\n"

echo "Script completed"