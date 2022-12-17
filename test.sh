#!/usr/bin/env /bin/sh
echo 'Content-Type: text/plain'
echo ''
date >> /tmp/test.sh.log
echo "Hello, world!  It is now: `date`."
