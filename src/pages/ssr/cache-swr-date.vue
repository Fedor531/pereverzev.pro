<template>
	<div class="global-padding">
		{{ data }}
	</div>
</template>

<script lang="ts" setup>
const { data } = useAsyncData('cache-swr-date', async () => {
	console.log('cache-swr-date ЗАПРОС ПОШЕЛ')

	return new Promise((resolve, rej) => {
		setTimeout(async() => {
			console.log('setTimeout cache-swr-date ЗАПРОС ПРОИЗОШЕЛ')
			const res = await $fetch('/api/data')
			resolve(res)
		}, 3000)
	})
})
</script>
