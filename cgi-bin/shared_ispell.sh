#!/usr/bin/env /bin/sh
printf "HTTP/1.0 200 OK\r\n"
printf "Content-type: text/plain\r\n\r\n"

#printenv | grep ^HTTP_ 

printf "Installing shared_ispell...\r\n"
apk add postgresql-shared_ispell
printf "adding shared library...\r\n"

#shared_ispell
sed -i "s/#shared_preload_libraries/shared_preload_libraries/" /var/lib/postgresql/data/postgresql.conf
sed -i "s/shared_preload_libraries = '\(.*\)'/shared_preload_libraries = '\1,shared_ispell'/" /var/lib/postgresql/data/postgresql.conf
sed -i "s/shared_ispell,shared_ispell/shared_ispell/" /var/lib/postgresql/data/postgresql.conf
sed -i "s/shared_ispell,shared_ispell/shared_ispell/" /var/lib/postgresql/data/postgresql.conf
sed -i "s/shared_ispell,'/shared_ispell'/" /var/lib/postgresql/data/postgresql.conf
printf "Restarting PostgreSQL...\r\n"
su postgres -c "pg_ctl restart -D /var/lib/postgresql/data" > /dev/nul
printf "PostgreSQL restarted\r\n"

echo "Script completed"