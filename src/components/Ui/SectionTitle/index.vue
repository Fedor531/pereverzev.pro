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
		required: true,
	},
});
</script>

<style lang="postcss" src="./style.pcss" />
