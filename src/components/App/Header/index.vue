<template>
	<header class="app-header">
		<div class="container">
			<UiLogo />
			<HeaderNavigation />
			<ThemeSwitcher />
		</div>
	</header>
</template>

<script lang="ts" setup>
import HeaderNavigation from './components/Navigation/index.vue'
import ThemeSwitcher from './components/ThemeSwitcher/index.vue'
</script>

<style lang="postcss" src="./style.pcss" />
