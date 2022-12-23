#!/usr/bin/env /bin/sh
printf "HTTP/1.0 200 OK\r\n"
printf "Content-type: text/plain\r\n\r\n"

#printenv | grep ^HTTP_ 

FILE=/var/lib/postgresql/data/PG_VERSION
if test -f "$FILE"; then
    printf `cat /var/lib/postgresql/data/PG_VERSION`
else
    printf ""
fi
