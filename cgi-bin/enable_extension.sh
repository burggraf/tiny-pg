#!/usr/bin/env /bin/sh
printf "HTTP/1.0 200 OK\r\n"
printf "Content-type: text/plain\r\n\r\n"

#printenv | grep ^HTTP_

printf "`psql -U postgres -c \"CREATE EXTENSION IF NOT EXISTS $QUERY_STRING CASCADE\"`"
