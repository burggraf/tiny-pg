FROM alpine

COPY start-postgres.sh .

RUN apk update && \
apk add postgresql && \
apk add nginx && \
apk add fcgiwrap && \
mkdir -p /run/postgresql && \
chown postgres:postgres /run/postgresql/ && \
mkdir -p /var/lib/postgresql/data && \
chown postgres:postgres /var/lib/postgresql/data && \
chmod +x start-postgres.sh && \
mkdir -p /http
COPY default.conf /etc/nginx/http.d/
COPY index.html /http/
COPY test.sh /http/

CMD ./start-postgres.sh
