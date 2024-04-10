cd /var/www/pereverzev.pro/nuxt
docker-compose down
docker rm pereverzev_front
docker-compose up -d
docker image prune -f
