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

const colorScheme = useCookie('color-scheme');

let lightMedia = '(prefers-color-scheme: light)';
let darkMedia = '(prefers-color-scheme: dark)';

if (colorScheme.value) {
	lightMedia = (colorScheme.value === 'light') ? 'all' : 'not all';
	darkMedia = (colorScheme.value === 'dark') ? 'all' : 'not all';
}

useHead({
	link: [
		{
			'data-theme': 'light',
			rel: 'stylesheet',
			media: lightMedia,
			href: '/assets/styles/light.css'
		},
		{
			'data-theme': 'dark',
			rel: 'stylesheet',
			media: darkMedia,
			href: '/assets/styles/dark.css'
		}
	],
})
</script>
