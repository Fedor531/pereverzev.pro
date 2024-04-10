cd /var/www/pereverzev.pro/nuxt
sudo docker-compose up -d --build
sudo docker image prune --force
rm -rf *
sudo systemctl restart nginx
