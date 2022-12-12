FROM alpine

COPY start-postgres.sh .

RUN apk update && \
apk add postgresql && \
apk add postgresql15-contrib-jit && \
apk add postgresql15-plperl-contrib && \
apk add postgresql15-pltcl && \
apk add postgresql15-plpython3-contrib && \
mkdir /run/postgresql && \
chown postgres:postgres /run/postgresql/ && \
mkdir -p /var/lib/postgresql/data && \
chown postgres:postgres /var/lib/postgresql/data && \
chmod +x start-postgres.sh

CMD ./start-postgres.sh

#chown postgres:postgres /var/lib/postgresql && \
#RUN ./install-postgres.sh
# CMD openrc -s postgres-custom.start && psql -U postgres && /bin/sh
# su postgres -c "cd /var/lib/postgresql && mkdir data && chown postgres:postgres data && initdb -D /var/lib/postgresql/data"
