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

### postgresql15-plperl-contrib
- hstore_plperl
- hstore_plperlu
- plperl
- plperlu

### postgresql15-pltcl
- pltcl
- pltclu

### postgresql15-plpython3-contrib
- hstore_plpython3u
- ltree_plpython3u
- plpython3u
