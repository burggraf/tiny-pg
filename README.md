# alpine-postgres: Setup PostgreSQL HA (High Availability) in Under 60 Seconds
Quickly spin up a PostgreSQL server with a **small footprint** (~50mb) running **asynchronous streaming replication**.

## Features
- Primary (write) server running the latest PostgreSQL (currently 15.1)
- Secondary (read-only, hot backup) server(s) running the latest PostgreSQL (currently 15.1)
- Data stored as a persistent **Docker Volume**
- Easy to run multiple, separate servers on different ports

# Requirements
- Docker command line installed (`docker -v` should return the current docker version, i.e. 20.10.16)
- MacOS or Linux running amd64 or arm64 architecture (not tested on Windows but may work fine)

## Quick Start
Works on:
- MacOS arm64
- MacOS amd64
- Linux arm64
- Linux amd64

### Primary Server
- choose a port for your server (i.e. 5001)
- create a file of environment variables named `<port>.env`, (i.e. 5001.env)

Sample env file (5001.env):
```sh
HOST_TYPE=PRIMARY
REPUSER_PASSWORD=MySecretReplicationUserPassword
POSTGRES_PASSWORD=MySecretPostgresUserPassword
```
- start the primary server: `./alpine-postgres.sh <port>` (i.e. ./alpine-postgres.sh 5001)

### Secondary (Replica) Server
- choose a port for your server (i.e. 5002)
- create a file of environment variables named `<port>.env`, (i.e. 5002.env)

Sample env file (5002.env):
```sh
HOST_TYPE=SECONDARY
REPUSER_PASSWORD=MySecretReplicationUserPassword
POSTGRES_PASSWORD=MySecretPostgresUserPassword
HOST_IP=192.168.1.100
HOST_PORT=5001
```
- start the secondary server: `./alpine-postgres.sh <port>` (i.e. ./alpine-postgres.sh 5002)

## Limitations and other Notes

- Streaming replication defaults to asynchronous mode, which is faster but may result in lost data of the latest transactions if the primary server fails before every write is completed on the secondary server(s).
- Limited extensions installed: only `plpgsql` is loaded in the PostgreSQL server.
- For security reasons you may want to edit or remove the `.env` file(s) after the container is running.
- `HOST_IP` can be an ip address (i.e. `1.2.3.4`) or a domain name (i.e. `myserver.host.com`)

By default, `alpine-postgres.sh` starts in "interactive mode".  This starts the PostgreSQL server and launches a `psql` command-line shell inside the container.  You can exit `psql` with `\q` and interact with the container.  Just type `exit` to leave the container (it will continue to run).

If you don't need or want to interact with the server, run `alpine-postgres-detached.sh` which just starts the server and exits immmediately.

## Local Demo
To see this in action, just run `./local-cluster.sh`.  This script will:
1. Create a primary server running on port 5011. (default password: `password`)
2. Create two secondary servers running on ports 5012 and 5013.

### See it work
1. Connect to the primary server `PGPASSWORD=password psql -U postres -h localhost -p 5011`
2. Create a table `create table people (id serial primary key, name text);`
3. Add some data `insert into people (name) values ('Adam'),('Betty'),('Charles');`
4. Exit the primary server `\q`
5. Connect to a secondary server `PGPASSWORD=password psql -U postres -h localhost -p 5012`
6. View the data that's already been replicated `select * from people;`
7. Exit the second server `\q`
8. Connect to the primary server `PGPASSWORD=password psql -U postres -h localhost -p 5011`
9. Modify the schema `alter table people add column age numeric;`
10. Change the data `update people set age = 22 where name = 'Charles';`
12. Exit the primary server `\q`
13. Connect to a secondary server `PGPASSWORD=password psql -U postres -h localhost -p 5012`
14. See the changed schema and data has been replicated `select * from people;`
