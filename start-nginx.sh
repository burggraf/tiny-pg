rm -f /run/fcgiwrap.socket
nginx
sleep 1
/usr/bin/fcgiwrap -s unix:/run/fcgiwrap.socket &
sleep 2
chmod 777 /run/fcgiwrap.socket
chown fcgiwrap:www-data /run/fcgiwrap.socket
chown -R nginx:nginx /var/lib/nginx

