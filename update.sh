cd /var/www/pereverzev.pro/nuxt
docker-compose down
docker rm -f  $(docker ps -aq)
docker-compose up -d --build
docker rmi -f $(docker images -aq)
systemctl restart nginx
