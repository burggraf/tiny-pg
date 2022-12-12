#!/bin/sh
if [ -n "$1" ] && [ "$1" -eq "$1" ] 2>/dev/null; then
  FILE="$1.env"
  echo "Checking for $FILE file..."
  if [ ! -f "$FILE" ]; then
    echo ""
    echo "No $FILE file was found, so we'll create one for you.  This will be a primary server."
    echo "We'll set up a temporary password of 'password' for the postgres user and the repuser."
    echo "You should change this as soon as possible:"
    echo ""
    echo "  ALTER USER postgres WITH PASSWORD 'newpassword';"
    echo "  ALTER USER repuser WITH PASSWORD 'newpassword';"
    echo ""
    echo "HOST_TYPE=PRIMARY" > $FILE
    echo "REPUSER_PASSWORD=password" >> $FILE
    echo "POSTGRES_PASSWORD=password" >> $FILE
    read -p "Press enter to continue"
  fi
  echo Starting PostgreSQL instance on port: $1
  echo "Creating volume: pg-data-$1"
  docker volume create pg-data-$1
  echo "Starting container: pg-$1"
  docker run --restart always --name pg-$1 -v pg-data-$1:/var/lib/postgresql/data -p $1:5432 --env-file $1.env -it burggraf/tiny-pg
else
  echo "usage: ./tiny-pg.sh <port>"
  echo "example: ./tiny-pg.sh 5001"
fi
