deploy:
	pnpm run nuxt:build && rsync --archive --compress --delete . root@62.109.4.55:/var/www/pereverzev.pro/nuxt/

start:
	pm2 start server/index.mjs --watch --name pereverzev.pro --max-memory-restart 800
