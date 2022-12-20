#!/usr/bin/env /bin/sh
printf "HTTP/1.0 200 OK\r\n"
printf "Content-type: text/plain\r\n\r\n"

#printenv | grep ^HTTP_ 

printf "Installing postgresql-citus-bitcode...\r\n"
apk add postgresql-citus-bitcode
printf "adding shared library...\r\n"
sed -i "s/#shared_preload_libraries/shared_preload_libraries/" /var/lib/postgresql/data/postgresql.conf
sed -i "s/shared_preload_libraries = '/shared_preload_libraries = 'citus,/" /var/lib/postgresql/data/postgresql.conf
sed -i "s/shared_preload_libraries = '\(.*\)'/shared_preload_libraries = 'citus,\1'/" /var/lib/postgresql/data/postgresql.conf
sed -i "s/citus,citus/citus/" /var/lib/postgresql/data/postgresql.conf
sed -i "s/citus,citus/citus/" /var/lib/postgresql/data/postgresql.conf
sed -i "s/citus,'/citus'/" /var/lib/postgresql/data/postgresql.conf
printf "Restarting PostgreSQL...\r\n"
su postgres -c "pg_ctl restart -D /var/lib/postgresql/data" > /dev/nul
printf "PostgreSQL restarted\r\n"

echo "Script completed"