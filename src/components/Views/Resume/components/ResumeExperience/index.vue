<template>
	<LayoutsSection :title="title">
		<div class="o-timeline">
			<ResumeExperienceCard
				v-for="item in list"
				:key="item.id"
				:item="item"
			/>
		</div>
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
