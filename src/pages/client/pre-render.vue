<template>
	<div class="pre-render-client global-padding">
		<ClientOnly>
			ClientOnly ClientOnly ClientOnly
		</ClientOnly>
		<div>
			FEDOR TEST
		</div>
		<div class="container" style="flex-direction: column; gap: 10px">
			<div style="padding: 20px; border: 1px solid red; display: flex; flex-direction: column; gap: 10px" v-for="item in data" :key="item.id">
				<b>
					{{ item.email }}
				</b>
				<span>
					{{ item.name }}
				</span>
				<span>
					{{ item.body }}
				</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const { data } = useAsyncData('client-pre-render', async () => {
	console.log('client-pre-render ЗАПРОС ПРОИЗОШЕЛ')

	return new Promise((resolve, rej) => {
		setTimeout(async() => {
			console.log('setTimeout client-pre-render ЗАПРОС ПРОИЗОШЕЛ')
			const res = await $fetch('https://jsonplaceholder.typicode.com/comments')
			resolve(res)
		}, 3000)
	})
})
</script>
