FROM alpine
COPY start-postgres.sh .
RUN apk update && \
apk add postgresql && \
mkdir /run/postgresql && \
chown postgres:postgres /run/postgresql/ && \
chmod +x ./start-postgres.sh && \
mkdir -p /var/lib/postgresql/data && \
chown postgres:postgres /var/lib/postgresql/data
CMD ./start-postgres.sh
#chown postgres:postgres /var/lib/postgresql && \
#RUN ./install-postgres.sh
# CMD openrc -s postgres-custom.start && psql -U postgres && /bin/sh
# su postgres -c "cd /var/lib/postgresql && mkdir data && chown postgres:postgres data && initdb -D /var/lib/postgresql/data"