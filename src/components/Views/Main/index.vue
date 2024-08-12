<template>
	<div class="main-page global-padding">
		<div class="container">
			<MainHero />
			<MainWhatIDo />
			<MainTestimonials />
		</div>
	</div>
</template>

<script lang="ts" setup>
import MainHero from './components/MainHero/index.vue';
import MainWhatIDo from './components/MainWhatIDo/index.vue';
import MainTestimonials from './components/MainTestimonials/index.vue';
</script>

<style lang="postcss">
.main-page {
	.container {
		flex-direction: column;
		gap: 20px;
	}
}
</style>
