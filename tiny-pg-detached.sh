#!/bin/sh
if [ -n "$1" ] && [ "$1" -eq "$1" ] 2>/dev/null; then
  FILE="$1.env"
  echo "Checking for $FILE file..."
  if [ ! -f "$FILE" ]; then
    echo ""
    echo "No $FILE file was found, so we'll create one for you."
    echo ""
    read -p "Is this a primary server? (y/n): " PRIMARY
    echo ""
    read -p "Enter a password for the postgres user: " POSTGRES_PASSWORD
    read -p "Enter a password for the replication user (repuser): " REPUSER_PASSWORD
    if [[ "$PRIMARY" = "y" ]] || [[ "$PRIMARY" = "Y" ]]; then
      echo "HOST_TYPE=PRIMARY" > $FILE
    else
      echo "HOST_TYPE=SECONDARY" > $FILE
      read -p "Enter the IP address or domain name of the primary server: " HOST_IP
      read -p "Enter the port of the primary server: " HOST_PORT
      echo "HOST_IP=$HOST_IP" >> $FILE
      echo "HOST_PORT=$HOST_PORT" >> $FILE
    fi
    echo "REPUSER_PASSWORD=$POSTGRES_PASSWORD" >> $FILE
    echo "POSTGRES_PASSWORD=$REPUSER_PASSWORD" >> $FILE
    echo ""
  fi
  echo Starting PostgreSQL instance on port: $1
  echo "Creating volume: pg-data-$1"
  docker volume create pg-data-$1
  echo "Starting container: pg-$1"
  docker run -d --restart always --name pg-$1 -v pg-data-$1:/var/lib/postgresql/data -p $1:5432 --env-file $1.env -it burggraf/tiny-pg
else
  echo "usage: ./tiny-pg.sh <port>"
  echo "example: ./tiny-pg.sh 5001"
fi
