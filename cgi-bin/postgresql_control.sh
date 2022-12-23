#!/usr/bin/env /bin/sh
printf "HTTP/1.0 200 OK\r\n"
printf "Content-type: text/plain\r\n\r\n"

#printenv | grep ^HTTP_ 

printf "PostgreSQL $QUERY_STRING...\r\n"

if [ "$QUERY_STRING" = "start" ]; then
    su postgres -c 'pg_ctl start -D /var/lib/postgresql/data' > /dev/nul
fi
if [ "$QUERY_STRING" = "stop" ]; then
    su postgres -c 'pg_ctl stop -D /var/lib/postgresql/data' > /dev/nul
fi
if [ "$QUERY_STRING" = "restart" ]; then
    su postgres -c 'pg_ctl restart -D /var/lib/postgresql/data' > /dev/nul
fi

printf "completed\r\n"
