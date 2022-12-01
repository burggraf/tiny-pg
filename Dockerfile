FROM alpine
COPY install-postgres.sh .
RUN chmod +x ./install-postgres.sh
RUN ./install-postgres.sh
CMD openrc -s postgres-custom.start && psql -U postgres && /bin/sh
