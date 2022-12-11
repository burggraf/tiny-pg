#!/bin/sh
if [ -n "$1" ] && [ "$1" -eq "$1" ] 2>/dev/null; then
  echo Starting PostgreSQL instance on port: $1
  docker volume create postgres-data-$1
  docker run --rm --name postgres-$1 -v postgres-data-$1:/var/lib/postgresql/data -p $1:5432 --env-file $1.env -it burggraf/alpine-postgres
else
  echo "usage: ./alpine-postgres-primary.sh <port>"
  echo "example: ./alpine-postgres-primary.sh 5001"
fi
