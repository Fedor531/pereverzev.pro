<template>
	<section
		class="l-section"
		:class="[{ full }]"
	>
		<div class="container">
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
	.container {
		flex-direction: column;
		gap: 28px;
	}

	&.full {
		padding: 26px 40px;
	}
}

@media all and (--screen-tablet) {
	.l-section {
		.container {
			gap: 24px;
		}

		&.full {
			padding: 26px 16px;
		}
	}
}

</style>
