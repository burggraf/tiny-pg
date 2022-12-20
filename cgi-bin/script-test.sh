#!/usr/bin/env /bin/sh
printf "HTTP/1.0 200 OK\r\n"
printf "Content-type: text/plain\r\n\r\n"

printf "Query string is $QUERY_STRING\r\n"
printf "DONE\r\n"
