#!/usr/bin/env /bin/sh
printf "HTTP/1.0 200 OK\r\n"
printf "Content-type: text/plain\r\n\r\n"
# get post data
RAW_DATA="$(cat)"
DATA=$(echo -n "$RAW_DATA" | head -1 | tr -d '\r\n');

printf "Query string is $QUERY_STRING\r\n"
printf "Post data is $DATA\r\n"
printf "DONE\r\n"
