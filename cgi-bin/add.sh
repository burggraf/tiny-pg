#!/usr/bin/env /bin/sh
printf "HTTP/1.0 200 OK\r\n"
printf "Content-type: text/plain\r\n\r\n"

#printenv | grep ^HTTP_ 

printf "Installing $QUERY_STRING...\r\n"

apk add $QUERY_STRING

echo "Script completed"