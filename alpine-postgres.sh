#!/bin/sh
if [ -n "$1" ] && [ "$1" -eq "$1" ] 2>/dev/null; then
  echo Starting PostgreSQL instance on port: $1
  docker volume create alpine-postgres-data-$1
  docker run --name alpine-postgres-$1 -v alpine-postgres-data-$1:/var/lib/postgresql/data -p $1:5432 -it burggraf/alpine-postgres
else
  echo "You must supply a port number as the first argument."
  echo "Example: ./start 5432"
fi
