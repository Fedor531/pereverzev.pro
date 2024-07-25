<template>
	<div class="global-padding">
		{{ data }}
	</div>
</template>

<script lang="ts" setup>
const { data } = useAsyncData('cache-swr-30-s-date', async () => {
	console.log('cache-swr-30-s-date ЗАПРОС ПОШЕЛ')

	return new Promise((resolve, rej) => {
		setTimeout(async() => {
			console.log('setTimeout cache-swr-30-s-date ЗАПРОС ПРОИЗОШЕЛ')
			const res = await $fetch('/api/data')
			resolve(res)
		}, 0)
	})
})
</script>
