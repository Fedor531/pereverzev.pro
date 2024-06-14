<template>
	<section class="l-section">
		<UiSectionTitle :title="title" />
		<div class="l-section__content">
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
});
</script>

<style lang="postcss">
.l-section {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 30px;
}

@media all and (--screen-tablet) {
	.l-section {
		gap: 24px;
	}
}

</style>
