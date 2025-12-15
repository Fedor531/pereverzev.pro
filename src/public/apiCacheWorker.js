const CACHE_NAME = 'api-cache-v1'

// Удаляем оба параметра кеша для сравнения URL
const getBaseUrl = (url) => {
	const urlObj = new URL(url)
	urlObj.searchParams.delete('_cacheTtl')
	urlObj.searchParams.delete('_cacheClear')
	return urlObj.toString()
}

const handleWithCacheTtl = async (request, ttlMs) => {
	const cache = await caches.open(CACHE_NAME)
	const baseUrl = getBaseUrl(request.url)

	// Ищем кешированные версии
	const cacheKeys = await cache.keys()
	const cachedVersions = cacheKeys.filter(key =>
		getBaseUrl(key.url) === baseUrl
	)

	if (cachedVersions.length > 0) {
		const cached = await cache.match(cachedVersions[0])
		const createdAt = Number(cached.headers.get('x-sw-cache-created-at') || '0')
		const storedTtl = Number(cached.headers.get('x-sw-cache-ttl') || '0') || ttlMs
		const isExpired = !createdAt || (Date.now() - createdAt > storedTtl)

		if (!isExpired) {
			return cached
		}
	}

	// Всегда получаем свежие данные (кеш истёк или его нет)
	const networkResponse = await fetch(request)

	if (networkResponse.ok) {
		const responseWithMeta = await wrapWithMeta(networkResponse, ttlMs)
		// Удаляем старые версии перед сохранением новой
		await Promise.all(cachedVersions.map(key => cache.delete(key)))
		await cache.put(request, responseWithMeta.clone())
		return responseWithMeta
	}

	return networkResponse
}

const handleClearCache = async (request) => {
	const cache = await caches.open(CACHE_NAME)
	const baseUrl = getBaseUrl(request.url)
	const cacheKeys = await cache.keys()

	// Удаляем все версии этого запроса
	const versionsToDelete = cacheKeys.filter(key =>
		getBaseUrl(key.url) === baseUrl
	)

	await Promise.all(versionsToDelete.map(key => cache.delete(key)))

	// Получаем свежий ответ
	return fetch(request)
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

	if (request.method !== 'GET') return

	const url = new URL(request.url)

	// Очистка кеша после действия пользователя
	if (url.searchParams.has('_cacheClear')) {
		event.respondWith(handleClearCache(request))
		return
	}

	// Обычное кеширование при загрузке страницы
	const ttlParam = url.searchParams.get('_cacheTtl')
	const ttlMs = ttlParam ? Number(ttlParam) : 0

	if (ttlMs && ttlMs > 0) {
		event.respondWith(handleWithCacheTtl(request, ttlMs))
	}
})
