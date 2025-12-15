const CACHE_NAME = 'api-cache-v1'

const handleWithCacheTtl = async (request, ttlMs) => {
	const cache = await caches.open(CACHE_NAME)

	let cached = await cache.match(request)

	if (cached) {
		const createdAt = Number(cached.headers.get('x-sw-cache-created-at') || '0')
		const storedTtl = Number(cached.headers.get('x-sw-cache-ttl') || '0') || ttlMs

		const isExpired = !createdAt || (Date.now() - createdAt > storedTtl)

		if (!isExpired) {
			return cached
		} else {
			await cache.delete(request)
			cached = null
		}
	}

	const networkResponse = await fetch(request)

	if (networkResponse.ok) {
		const responseWithMeta = await wrapWithMeta(networkResponse, ttlMs)
		await cache.put(request, responseWithMeta.clone())
		return responseWithMeta
	}

	return networkResponse
}

const wrapWithMeta = async (response, ttlMs) => {
	const cloned = response.clone()
	const body = await cloned.blob()

	const headers = new Headers(cloned.headers)
	headers.set('x-sw-cache-created-at', String(Date.now()))
	headers.set('x-sw-cache-ttl', String(ttlMs))

	return new Response(body, {
		status: cloned.status,
		statusText: cloned.statusText,
		headers
	})
}

self.addEventListener('fetch', (event) => {
	const request = event.request

	console.log('request', request)

	// только GET-запросы
	if (request.method !== 'GET') {
		return
	}

	const url = new URL(request.url)

	console.log('url', url)

	const ttlParam = url.searchParams.get('_cacheTtl')

	console.log('ttlParam', ttlParam)

	const ttlMs = ttlParam ? Number(ttlParam) : 0

	console.log('ttlMs', ttlMs)

	if (!ttlMs || ttlMs <= 0) {
		return
	}

	event.respondWith(handleWithCacheTtl(request, ttlMs))
})
