#!/usr/bin/env /bin/sh
printf "HTTP/1.0 200 OK\r\n"
printf "Content-type: text/plain\r\n\r\n"

#printenv | grep ^HTTP_ 
# get post data
RAW_DATA="$(cat)"
DATA=$(echo -n "$RAW_DATA" | head -1 | tr -d '\r\n');

printf "PostgreSQL $DATA...\r\n"

if [ "$DATA" = "start" ]; then
    su postgres -c 'pg_ctl start -D /var/lib/postgresql/data' > /dev/nul
fi
if [ "$DATA" = "stop" ]; then
    su postgres -c 'pg_ctl stop -D /var/lib/postgresql/data' > /dev/nul
fi
if [ "$DATA" = "restart" ]; then
    su postgres -c 'pg_ctl restart -D /var/lib/postgresql/data' > /dev/nul
fi

printf "completed\r\n"
