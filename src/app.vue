<template>
	<Html :lang="locale">
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
	</Html>
</template>

<script setup lang="ts">
const { locale, } = useI18n()
</script>
