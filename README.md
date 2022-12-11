# alpine-postgres
Quickly spin up a PostgreSQL server with a small footprint (~50mb) with asynchronous replication

## Quick Start (MacOS arm64, MacOS amd64, Linux arm64, Linux amd64)

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
