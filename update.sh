cd /var/www/pereverzev.pro/nuxt
docker-compose down
docker-compose up -d
docker rmi -f $(docker images -aq)
