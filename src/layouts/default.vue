<template>
	<div class="layout">
		<AppHeader />
		<main class="page">
			<slot />
		</main>
		<AppFooter />
	</div>
</template>

<style>
.layout {
	position: relative;

	display: flex;
	flex-direction: column;

	min-height: 100vh;
}

.page {
	display: flex;
	flex-direction: column;

	flex-grow: 1;
}
</style>
