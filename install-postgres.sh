#!/bin/sh
apk update
apk upgrade
apk add postgresql
apk add openrc
mkdir /run/postgresql
chown postgres:postgres /run/postgresql/
su postgres -c "cd /var/lib/postgresql && mkdir data && chown postgres:postgres data && initdb -D /var/lib/postgresql/data"
echo "#!/bin/sh" > /etc/init.d/postgres-custom.start
echo "su postgres -c 'pg_ctl start -D /var/lib/postgresql/data'" >> /etc/init.d/postgres-custom.start
echo "host all all 0.0.0.0/0 md5" >> /var/lib/postgresql/data/pg_hba.conf
echo "listen_addresses='*'" >> /var/lib/postgresql/data/postgresql.conf
chmod +x /etc/init.d/postgres-custom.start
su postgres -c 'pg_ctl start -D /var/lib/postgresql/data'
psql -U postgres -c "alter role postgres with password 'postgres'"
