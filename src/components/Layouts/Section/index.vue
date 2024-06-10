<template>
	<section
		class="l-section"
		:class="[{ full }]"
	>
		<div class="l-section__container">
			<UiSectionTitle :title="title" />
			<slot />
		</div>
	</section>
</template>

<script lang="ts" setup>

defineProps({
	title: {
		type: String,
		required: true,
	},
	full: {
		type: Boolean,
		default: false,
	},
});
</script>

<style lang="postcss" src="./style.pcss" />
