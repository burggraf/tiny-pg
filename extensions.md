## Installing PostgreSQL Extensions
But I need __________ (fill in your favorite PostgreSQL extension here).  How can install it?

The following extensions can be installed on your server(s) using a simple command.  For example, to install the first large set of extensions on a running Docker container named `postgres-5011`, just run:

`docker exec -it postgres-5011 /bin/sh -c "apk add postgresql15-contrib-jit"`

### (automatically included)
- plpgsql

### postgresql15-contrib-jit
- adminpack
- amcheck
- autoinc
- bloom
- btree_gin
- btree_gist
- citext
- cube
- dblink
- dict_int
- dict_xsyn
- earthdistance
- file_fdw
- fuzzystrmatch
- hstore
- insert_username
- intagg
- intarray
- isn
- lo
- ltree
- moddatetime
- old_snapshot
- pageinspect
- pg_buffercache
- pg_freespacemap
- pg_prewarm
- pg_stat_statements
- pg_surgery
- pg_trgm
- pg_visibility
- pg_walinspect
- pgcrypto
- pgrowlocks
- pgstattuple
- postgres_fdw
- refint
- seg
- sslinfo
- tablefunc
- tcn
- tsm_system_rows
- tsm_system_time
- unaccent
- uuid-ossp
- xml2

### postgis
- postgis
- postgis_raster
- postgis_tiger_geocoder
- postgis_topology

### postgresql15-plperl-contrib
- hstore_plperl
- hstore_plperlu
- plperl
- plperlu

### postgresql15-pltcl
- pltcl
- pltclu

### postgresql15-plpython3
- plpython3u

### postgresql15-plpython3-contrib
- hstore_plpython3u
- ltree_plpython3u
- plpython3u

### postgresql-mysql_fdw
- mysql_fdw

### postgresql-citus-bitcode
- citus
- citus_columnar

#### Notes
Full installation requirements for citus:

```sh
apk add postgresql-citus-bitcode
echo "shared_preload_libraries = 'citus'" >> /var/lib/postgresql/data/postgresql.conf
su postgres -c "pg_ctl restart -D /var/lib/postgresql/data"
```

### postgresql-temporal_tables
- temporal_tables

### postgresql-shared_ispell
- shared_ispell

#### Notes
```sh
apk add postgresql-shared_ispell
echo "shared_preload_libraries = 'shared_ispell'" >> /var/lib/postgresql/data/postgresql.conf
su postgres -c "pg_ctl restart -D /var/lib/postgresql/data"
```
### postgresql-plpgsql_check
- plpgsql_check

### postgresql-url_encode
- url_encode

### postgresql-uint
- uint

### postgresql-orafce
- orafce

### postgresql-rum
-rum

### postgresql-bdr-extension
PostgreSQL bidirectional replication (BDR) extension
- bdr

### postgresql-hypopg
- hypopg

### postgresql-pllua
- plluau

### postgresql-sequential-uuids
- sequential_uuids

### postgresql-pg_cron
- pg_cron

#### Notes
```sh
apk add pg_cron
echo "shared_preload_libraries = 'pg_cron'" >> /var/lib/postgresql/data/postgresql.conf
su postgres -c "pg_ctl restart -D /var/lib/postgresql/data"
```
