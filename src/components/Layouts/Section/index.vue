<template>
	<section
		class="l-section"
		:class="[{ full }]"
	>
		<div class="l-section__container">
			<UiSectionTitle :title="title" />
			<slot />
		</div>
	</section>
</template>

<script lang="ts" setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
	full: {
		type: Boolean,
		default: false,
	},
});
</script>

<style lang="postcss">
.l-section {
	&__container {
		display: flex;
		flex-direction: column;
		gap: 28px;

		width: 100%;
	}

	&.full {
		padding: 26px 40px;

		.l-section__container {
			max-width: var(--container-width);
			margin: 0 auto;
		}
	}
}

@media all and (--screen-tablet) {
	.l-section {
		&__container {
			gap: 24px;
		}

		&.full {
			padding: 26px 16px;
		}
	}
}

</style>
