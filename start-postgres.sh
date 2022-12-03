#!/bin/sh
su postgres -c 'initdb -D /var/lib/postgresql/data'
echo "host all all 0.0.0.0/0 md5" >> /var/lib/postgresql/data/pg_hba.conf && \
echo "listen_addresses='*'" >> /var/lib/postgresql/data/postgresql.conf && \
su postgres -c 'pg_ctl start -D /var/lib/postgresql/data'
psql -U postgres -c "alter role postgres with password 'postgres'"
psql -U postgres && /bin/sh
