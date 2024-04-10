cd /var/www/deverzev.ru/pereverzev-front
docker-compose down
docker rm pereverzev_front
docker-compose up -d
docker image prune -f
