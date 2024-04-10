cd /var/www/pereverzev.pro/nuxt
docker-compose down
docker rm -f  $(docker ps -q -a)
docker-compose up -d
docker rmi -f $(docker images -aq)
systemctl restart nginx
