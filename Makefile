deploy:
	pnpm run build && cd .output && rsync --archive --compress --delete . root@62.109.4.55:/var/www/pereverzev.pro/nuxt/
