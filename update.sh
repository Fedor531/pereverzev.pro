cd /var/www/pereverzev.pro/nuxt
sudo docker-compose down
sudo docker rmi -f $(docker images -aq)
sudo docker-compose up -d --build
