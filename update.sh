cd /var/www/pereverzev.pro/nuxt
sudo docker-compose up -d --build
sudo docker image prune --force
sudo systemctl restart nginx
