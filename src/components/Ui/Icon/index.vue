<template>
	<svg class="ui-icon">
		<use :href="`/assets/icons.svg#${name}`" />
	</svg>
</template>

<script lang="ts" setup>
defineProps({
	name: {
		type: String,
		required: true,
	},
});
</script>

<style>
.ui-icon {
	max-width: 32px;
	max-height: 32px;

	fill: var(--color-blue);
}
</style>
