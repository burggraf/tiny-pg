#!/usr/bin/env /bin/sh
printf "HTTP/1.0 200 OK\r\n"
printf "Content-type: text/plain\r\n\r\n"

#printenv | grep ^HTTP_

printf "`psql -U postgres -c \"
select array_to_json(array_agg(row_to_json(t)))
    from (
      select name,default_version,installed_version from pg_available_extensions order by name
    ) t
\"`" | sed -n '3p'
