cd /var/www/pereverzev.pro/nuxt
docker-compose down
docker-compose up -d --build
docker image prune -f
