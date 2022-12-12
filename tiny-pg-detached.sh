#!/bin/sh
if [ -n "$1" ] && [ "$1" -eq "$1" ] 2>/dev/null; then
  echo Starting PostgreSQL instance on port: $1
  docker volume create pg-data-$1
  docker run -d --restart always --name pg-$1 -v pg-data-$1:/var/lib/postgresql/data -p $1:5432 --env-file $1.env -it burggraf/tiny-pg
else
  echo "usage: ./tiny-pg-detached.sh <port>"
  echo "example: ./tiny-pg-detached.sh 5001"
fi
