FROM alpine

COPY start-postgres.sh .

RUN apk update && \
apk add postgresql nginx && \
mkdir /run/postgresql && \
chown postgres:postgres /run/postgresql/ && \
mkdir -p /var/lib/postgresql/data && \
chown postgres:postgres /var/lib/postgresql/data && \
chmod +x start-postgres.sh
COPY default.conf /etc/nginx/http.d/

CMD ./start-postgres.sh
