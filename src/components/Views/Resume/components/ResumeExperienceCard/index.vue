<template>
	<div class="m-timeline-card">
    <span class="m-timeline-card__period">
      {{ item.period }}
    </span>
		<UiLink
			class="m-timeline-card__company"
			:to="item.companyLink"
			type="external"
		>
			{{ item.company }}
		</UiLink>
		<h3>
			{{ item.title }}
		</h3>
		<div class="m-timeline-card__desc">
			<ul>
				<li
					v-for="(descItem, index) in item.description"
					:key="index"
				>
					{{ descItem.text }}
					<NuxtLink
						v-if="descItem.portfolioLink"
						:href="descItem.portfolioLink"
					>
						Подробнее
					</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';

export interface TimelineCard {
	id: number,
	period: string,
	company: string,
	companyLink: string,
	title: string,
	description: {
		text: string,
		portfolioLink?: string,
	}[],
}

defineProps({
	item: {
		type: Object as PropType<TimelineCard>,
		required: true,
	},
});
</script>

<style lang="postcss">
.m-timeline-card {
	--line-color: #F5F6F9;
	position: relative;

	padding: 24px 0 20px 40px;

	&::before {
		position: absolute;
		bottom: 5px;
		left: 15px;

		display: block;

		width: 1px;
		height: 100%;

		content: '';

		background-color: var(--line-color);
	}

	&::after {
		position: absolute;
		bottom: 3px;
		left: 15px;

		display: block;

		width: calc(100% - 15px);
		height: 1px;

		content: '';

		background-color: var(--line-color);
	}

	&:first-child {
		padding-top: 3px;
	}

	&__period {
		position: relative;

		display: inline-block;

		margin: 0 0 5px -40px;
		padding: 0 10px;

		color: var(--primary-grey);
		border: 2px solid var(--primary-blue);
		border-radius: 30px;
		background-color: var(--white);

		font-size: var(--fs-xs);
		font-weight: 600;
		line-height: 1.84;
	}

	&__company {
		display: inline-block;

		margin-left: 8px;

		opacity: .8;
		color: var(--primary-grey);

		font-size: var(--fs-sm);
		font-weight: 600;
	}

	h3 {
		margin: 8px 0;

		color: var(--primary-black);

		font-size: var(--fs-base);

		font-weight: 600
	}

	&__desc {
		color: var(--primary-black);

		font-size: var(--fs-sm);

		li {
			&:not(:last-child) {
				margin-bottom: 6px;
			}
		}
	}
}

</style>
