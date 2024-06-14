<template>
	<LayoutsSection :title="title">
		<ResumeExperienceCard
			v-for="item in list"
			:key="item.id"
			:item="item"
		/>
	</LayoutsSection>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';
import ResumeExperienceCard from '../ResumeExperienceCard/index.vue';

defineProps({
	title: {
		type: String,
		required: true,
	},
	list: {
		type: Array as PropType<Array<any>>,
		required: true,
	},
});
</script>
