<template>
	<fieldset class="theme-switcher">
		<legend class="theme-switcher__legend">
			Схема
		</legend>
		<input
			v-model="colorScheme"
			class="theme-switcher__radio switcher__radio--light"
			type="radio"
			name="color-scheme"
			value="light"
			aria-label="Светлая"
			@click="setScheme('light')"
		>
		<input
			v-model="colorScheme"
			class="theme-switcher__radio switcher__radio--auto"
			type="radio"
			name="color-scheme"
			value="auto"
			aria-label="Системная"
			@click="setScheme('auto')"
		>
		<input
			v-model="colorScheme"
			class="theme-switcher__radio switcher__radio--dark"
			type="radio"
			name="color-scheme"
			value="dark"
			aria-label="Тёмная"
			@click="setScheme('dark')"
		>
		<div class="theme-switcher__status" />
	</fieldset>
</template>

<script lang="ts" setup>
const colorScheme = ref<'light' | 'auto' | 'dark'>('auto');
const savedScheme = useCookie<'light' | 'auto' | 'dark'>('color-scheme').value;

if (savedScheme) {
	colorScheme.value = savedScheme;
}

let lightStyles = null;
let darkStyles = null;

onMounted(() => {
	lightStyles = document.querySelectorAll('link[rel=stylesheet][data-theme=light]');
	darkStyles = document.querySelectorAll('link[rel=stylesheet][data-theme=dark]');
});

function setScheme(scheme) {
	colorScheme.value = scheme;
	switchMedia(scheme);

	if (scheme === 'auto') {
		useCookie('color-scheme').value = '';
	}
	else {
		useCookie('color-scheme').value = scheme;
	}
}

function switchMedia(scheme) {
	let lightMedia;
	let darkMedia;

	if (scheme === 'auto') {
		lightMedia = '(prefers-color-scheme: light)';
		darkMedia = '(prefers-color-scheme: dark)';
	}
	else {
		lightMedia = (scheme === 'light') ? 'all' : 'not all';
		darkMedia = (scheme === 'dark') ? 'all' : 'not all';
	}

	[...lightStyles].forEach((link) => {
		link.media = lightMedia;
	});

	[...darkStyles].forEach((link) => {
		link.media = darkMedia;
	});
}
</script>
