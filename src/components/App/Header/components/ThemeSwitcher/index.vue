<template>
	<fieldset class="theme-switcher">
		<legend class="theme-switcher__legend">
			Схема
		</legend>
		<button
			v-for="item in switchers"
			:key="item.id"
			class="theme-switcher__radio"
			:class="{ 'is-active': colorScheme === item.id }"
			:aria-label="item.title"
			:title="item.title"
			@click="setScheme(item.id)"
		>
			<UiIcon :name="item.icon" />
		</button>
		<div class="theme-switcher__status" />
	</fieldset>
</template>

<script lang="ts" setup>
const switchers = [
	{
		id: 'light',
		title: 'Светлая',
		icon: 'sun',
	},
	{
		id: 'auto',
		title: 'Системная',
		icon: 'circle',
	},
	{
		id: 'dark',
		title: 'Тёмная',
		icon: 'moon',
	},
];

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
		useCookie('color-scheme', { domain: '.pereverzev.pro', maxAge: 2678400 }).value = scheme;
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
.theme-switcher {
	position: relative;
	padding: 3px 4px;
	display: grid;
	gap: 2px;
	grid-template-columns: 1fr 1fr 1fr;
	border: none;
}

.theme-switcher__legend {
	position: absolute;
	opacity: 0;
	pointer-events: none;
}

.theme-switcher__radio {
	-webkit-appearance: none;
	appearance: none;
	margin: 0;
	width: 22px;
	height: 22px;
	cursor: pointer;
	background: none;
	border: none;

	&:hover:not(&.is-active) {
		.ui-icon {
			opacity: .8;
		}
	}

	.ui-icon {
		fill: var(--primary-text-color);
		width: 100%;
		height: 100%;
		max-width: none;
		max-height: none;
		transition: opacity var(--transition-medium);
	}

	&.is-active {
		.ui-icon {
			fill: var(--color-blue);
		}
	}
}

.theme-switcher__status {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: -1;
	box-shadow: 0 0 0 2px var(--border-color);
	border-radius: 18px;
}
</style>
