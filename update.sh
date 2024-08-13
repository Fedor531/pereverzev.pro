cd /var/www/pereverzev.pro/nuxt
sudo docker-compose down
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
sudo docker-compose up -d
