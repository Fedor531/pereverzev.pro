<template>
	<footer class="app-footer global-padding">
		<div class="container">
			<UiSocial />
			<div class="app-footer__langs">
				<a
					:class="{'is-active': locale === 'en'}"
					:href="`${protocol}en.${host}${route.fullPath}`"
				>
					En
				</a>
				<a
					:href="`${protocol}${host}${route.fullPath}`"
					:class="{'is-active': locale === 'ru'}"
				>
					Ru
				</a>
			</div>
			<p class="app-footer__copyrights">
				{{ new Date().getFullYear() }}
			</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
const protocol = config.public.NUXT_SITE_PROTOCOL;
const host = config.public.NUXT_SITE_HOST;
const { locale } = useI18n();
</script>

<style lang="postcss" src="./style.pcss" />
