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

<style lang="postcss">
.ui-page-title {
	margin-bottom: 50px;
	padding: 60px 40px;

	border-top: 2px solid var(--border-color);
	border-bottom: 2px solid var(--border-color);
	background-color: var(--background-color-2);

	&__container {
		position: relative;

		max-width: var(--container-width);
		margin: 0 auto;
	}

	h1 {
		font-size: 40px;
	}

	span {
		position: absolute;
		top: -40px;
		right: 70px;

		color: var(--medium-grey);
	}
}

@media all and (--screen-tablet) {
	.ui-page-title {
		margin-bottom: 20px;
		padding: 30px 16px;

		h1 {
			margin-bottom: 6px;

			font-size: 30px;
		}

		span {
			position: static;
		}
	}
}

</style>
