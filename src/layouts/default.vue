<template>
	<div class="layout">
		<AppHeader />
		<main class="page">
			<slot />
		</main>
		<AppFooter />
	</div>
</template>

<script lang="ts" setup>
onMounted(() => {
	const setVh = () => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	};

	window.addEventListener('resize', setVh);
	setVh();
});
</script>

<style>
.layout {
	position: relative;

	display: flex;
	flex-direction: column;

	height: 100vh; /* Fallback */
	height: calc(var(--vh, 1vh) * 100);
}

.page {
	display: flex;
	flex-direction: column;

	flex-grow: 1;
}
</style>
