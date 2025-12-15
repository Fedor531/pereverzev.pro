<template>
	<div>
		<h1>Тест кэширования</h1>
		<div>
			<button @click="fetchWithCache">Запрос с кешем (30 сек)</button>
			<button @click="fetchWithoutCache">Запрос без кеша</button>
			<button @click="fetchClearCache">Очистить кеш</button>
		</div>
		<pre>{{ response }}</pre>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const response = ref<string>('Нажмите кнопку')

const fetchWithCache = async () => {
	try {
		const url = 'https://api.agify.io?name=Alex&_cacheTtl=30000'
		console.log('Запрос с кешем:', url)

		const res = await fetch(url)
		const data = await res.json()

		response.value = JSON.stringify(data, null, 2)
	} catch (error) {
		response.value = `Ошибка: ${error.message}`
	}
}

const fetchWithoutCache = async () => {
	try {
		const url = 'https://api.agify.io?name=Alex'
		console.log('Запрос без кеша:', url)

		const res = await fetch(url)
		const data = await res.json()

		response.value = JSON.stringify(data, null, 2)
	} catch (error) {
		response.value = `Ошибка: ${error.message}`
	}
}

const fetchClearCache = async () => {
	try {
		const url = 'https://api.agify.io?name=Alex&_cacheClear=true'
		console.log('Очистка кеша:', url)

		const res = await fetch(url)
		const data = await res.json()

		response.value = JSON.stringify(data, null, 2)
	} catch (error) {
		response.value = `Ошибка: ${error.message}`
	}
}

onMounted(() => {
	if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('/apiCacheWorker.js', { scope: '/' })
			.then((res) => {
				console.log('Service Worker зарегистрирован', res)
			})
			.catch((err) => {
				console.error('Service worker registration failed', err)
			})
	}
})
</script>
