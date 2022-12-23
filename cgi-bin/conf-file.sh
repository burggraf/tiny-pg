#!/usr/bin/env /bin/sh
printf "HTTP/1.0 200 OK\r\n"
printf "Content-type: text/plain\r\n\r\n"

#printenv | grep ^HTTP_ 

CONF=`cat /var/lib/postgresql/data/postgresql.conf | sed 's/#.*$//g' | sed 's/^\s*$//g' | sed '/^$/d'`

printf "$CONF"

