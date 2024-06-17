<template>
	<Html :lang="locale">
	<NuxtLayout>
		404
	</NuxtLayout>
	</Html>
</template>

<script setup lang="ts">
const { locale, } = useI18n()
</script>
