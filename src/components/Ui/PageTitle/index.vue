<template>
	<div class="ui-page-title">
		<div class="ui-page-title__container">
			<h1>
				{{ title }}
			</h1>
			<span v-if="subTitle">
				{{ subTitle }}
			</span>
		</div>
	</div>
</template>

<script lang="ts" setup>


defineProps({
	title: {
		type: String,
		required: true,
	},
	subTitle: {
		type: String,
		default: null,
	},
});
</script>

<style lang="postcss" src="./style.pcss" />
