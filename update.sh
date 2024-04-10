cd /var/www/pereverzev.pro/nuxt
docker-compose up -d --build
docker rmi -f $(docker images -aq)
