<template>
	<div class="ui-page-title global-padding">
		<div class="container">
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
		required: true
	},
	subTitle: {
		type: String,
		default: null
	}
});
</script>

<style lang="postcss">
.ui-page-title {
	margin-bottom: 50px;
	padding-top: 60px;
	padding-bottom: 60px;

	border-top: 2px solid var(--border-color);
	border-bottom: 2px solid var(--border-color);
	background-color: var(--background-color-2);

	.container {
		position: relative;
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
		padding-top: 30px;
		padding-bottom: 30px;

		.container {
			flex-direction: column;
		}

		h1 {
			font-size: 30px;
		}

		span {
			display: block;
			margin-top: 6px;

			position: static;
		}
	}
}

</style>
