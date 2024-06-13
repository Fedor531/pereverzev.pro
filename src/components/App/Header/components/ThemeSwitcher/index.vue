<template>
	<fieldset class="theme-switcher">
		<legend class="theme-switcher__legend">
			Схема
		</legend>
		<input
			v-model="colorScheme"
			class="theme-switcher__radio theme-switcher__radio--light"
			:class="{ 'is-active': colorScheme === 'light' }"
			type="radio"
			name="color-scheme"
			value="light"
			aria-label="Светлая"
			@click="setScheme('light')"
		>
		<input
			v-model="colorScheme"
			class="theme-switcher__radio theme-switcher__radio--auto"
			:class="{ 'is-active': colorScheme === 'auto' }"
			type="radio"
			name="color-scheme"
			value="auto"
			aria-label="Системная"
			@click="setScheme('auto')"
		>
		<input
			v-model="colorScheme"
			class="theme-switcher__radio theme-switcher__radio--dark"
			:class="{ 'is-active': colorScheme === 'dark' }"
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


<style>
/* Switcher */

.theme-switcher {
	position: relative;
	padding: 2px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	border: none;
}

/* Switcher Legend */

.theme-switcher__legend {
	position: absolute;
	opacity: 0;
	pointer-events: none;
}

/* Switcher Radio */

.theme-switcher__radio {
	-webkit-appearance: none;
	appearance: none;
	margin: 0;
	width: 30px;
	height: 30px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 24px;
	transition: filter 0.1s ease-in;
	cursor: pointer;

	&.is-active {
		background-color: var(--color-blue);
		border-radius: 100%;
	}
}

.theme-switcher__radio:focus {
	outline: none;
}

.theme-switcher__radio--light {
	background-image: url('~/assets/images/icons/light.svg');
}

.theme-switcher__radio--auto {
	background-image: url('~/assets/images/icons/auto.svg');
}

.theme-switcher__radio--dark {
	background-image: url('~/assets/images/icons/dark.svg');
}

/* Switcher Status */

.theme-switcher__status {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: -1;
	box-shadow: 0 0 0 2px rgb(0 0 0 / 0.2);
	border-radius: 18px;
	background-color: rgb(255 255 255 / 0.5);
}
</style>
