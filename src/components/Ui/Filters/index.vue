<template>
	<ul class="ui-filters">
		<li
			v-for="item in list"
			:key="item"
			class="ui-filters__item"
		>
			<ALink
				:to="`/portfolio/?filter=${item.value}`"
				:class="{ 'active': modelValue === item.value }"
				@click="emit('update:modelValue', item.value)"
			>
				{{ item.title }}
			</ALink>
		</li>
	</ul>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';

export interface FilterItem {
	title: string,
	value: number | string,
}

defineProps({
	modelValue: {
		type: [String, Number],
		required: true
	},
	list: {
		type: Array as PropType<Array<FilterItem>>,
		required: true
	}
});

const emit = defineEmits(['update:modelValue']);
</script>

<style lang="postcss">
.ui-filters {
	text-align: end;

	&__item {
		display: inline-block;
	}

	.ui-link {
		padding: 4px 14px;

		font-size: var(--fs-xs);

		&.active {
			color: var(--color-blue);
		}
	}
}
</style>
