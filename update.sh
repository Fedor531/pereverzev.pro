cd /var/www/pereverzev.pro/nuxt
sudo docker-compose down
sudo docker rm -vf $(docker ps -aq)
sudo docker rmi -f $(docker images -aq)
sudo docker-compose up -d
