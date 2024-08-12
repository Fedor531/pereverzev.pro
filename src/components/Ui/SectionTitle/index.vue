<template>
	<div class="ui-section-title">
		<h2>
			{{ title }}
		</h2>
	</div>
</template>

<script lang="ts" setup>
defineProps({
	title: {
		type: String,
		required: true
	}
});
</script>

<style lang="postcss">
.ui-section-title {
	h2 {
		position: relative;

		display: flex;

		width: min-content;

		padding-bottom: 8px;

		white-space: nowrap;

		font-size: var(--fs-2xl);
		font-weight: 600;

		&::before {
			position: absolute;
			bottom: 0;

			display: block;

			width: 100%;
			height: 2px;

			content: '';

			background-color: var(--border-color);
		}

		&::after {
			position: absolute;
			bottom: 0;

			display: block;

			width: 30px;
			height: 2px;

			content: '';

			background-color: var(--color-blue);
		}
	}
}
</style>
