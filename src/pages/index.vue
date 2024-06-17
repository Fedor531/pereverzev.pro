<template>
	<div>
		<div>
			<button @click="setLocale('en')">en</button>
			<button @click="setLocale('ru')">ru</button>
			<p>{{ $t('hello') }}</p>
			{{ locale }}
		</div>
	</div>
</template>

<script lang="ts" setup>
const { locale, setLocale } = useI18n()
</script>
