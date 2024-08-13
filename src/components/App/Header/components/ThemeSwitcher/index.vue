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
			@click="setScheme(item.id as ColorScheme)"
		>
			<UiIcon :name="item.icon" />
		</button>
		<div class="theme-switcher__status" />
	</fieldset>
</template>

<script lang="ts" setup>
const { public: { NUXT_SITE_HOST, NUXT_ENVIRONMENT } } = useRuntimeConfig();
const domain = NUXT_ENVIRONMENT === 'local' ? 'localhost' : `.${NUXT_SITE_HOST}`;

const switchers = [
	{
		id: 'light',
		title: 'Светлая',
		icon: 'sun'
	},
	{
		id: 'auto',
		title: 'Системная',
		icon: 'circle'
	},
	{
		id: 'dark',
		title: 'Тёмная',
		icon: 'moon'
	}
];

type ColorScheme = 'light' | 'auto' | 'dark'

const colorScheme = ref<ColorScheme>('auto');
const savedScheme = useCookie<ColorScheme>('color-scheme').value;

if (savedScheme) {
	colorScheme.value = savedScheme;
}

let lightStyles = null;
let darkStyles = null;

onMounted(() => {
	lightStyles = document.querySelectorAll('link[data-theme=light]');
	darkStyles = document.querySelectorAll('link[data-theme=dark]');
});

const colorSchemeCookie = useCookie(
	'color-scheme',
	{
		domain,
		maxAge: 2678400
	}
);

function setScheme(scheme: ColorScheme) {
	colorScheme.value = scheme;
	switchMedia(scheme);
	colorSchemeCookie.value = (scheme !== 'auto') ? scheme : ''
}

function switchMedia(scheme: ColorScheme) {
	const lightMedia = (scheme === 'auto') ? '(prefers-color-scheme: light)' : (scheme === 'light' ? 'all' : 'not all');
	const darkMedia = (scheme === 'auto') ? '(prefers-color-scheme: dark)' : (scheme === 'dark' ? 'all' : 'not all');


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
