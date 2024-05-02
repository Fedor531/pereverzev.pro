self.addEventListener('fetch', (event) => {
	const url = new URL(event.request.url);
	console.log('url', url);
	event.respondWith((async () => {
		const store = await caches.open('caches')
		const req = event.request
		const cached = await store.match(req)
		console.log('cached', cached);
		return cached || fetch(req)
	})())
})
