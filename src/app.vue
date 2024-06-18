<template>
	<Html :lang="locale">
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
	</Html>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const event = useRequestEvent()

let isEng = useState('is-eng', () => false);

if (process.server && event.node.req.headers.host?.includes('en')) {
	isEng.value = true
}

if (isEng.value) {
	setLocale('en')
}
</script>
