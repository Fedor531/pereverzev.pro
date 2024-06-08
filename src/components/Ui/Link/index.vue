<template>
	<NuxtLink
		class="ui-link"
		:target="type === 'external' ? '_blank' : ''"
		no-prefetch
		:to="to"
	>
		<slot />
	</NuxtLink>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';

type LinkType = 'internal' | 'external'

defineProps({
	type: {
		type: String as PropType<LinkType>,
		default: 'internal',
	},
	to: {
		type: String,
		required: true,
	},
});
</script>

<style lang="postcss" src="./style.pcss" />
