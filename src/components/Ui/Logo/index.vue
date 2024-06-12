<template>
	<NuxtLink
		class="ui-logo"
		to="/"
	>
		<img
			class="ui-logo__image"
			src="/logo.svg"
			alt="logo">
		<span>
			pereverzev.pro
		</span>
	</NuxtLink>
</template>

<style lang="postcss">
.ui-logo {
	display: flex;
	align-items: center;
	gap: 8px;
	font-size: var(--fs-xl);

	&__image {
		width: 40px;
		height: 40px;
	}
}

@media all and (--screen-tablet) {
	.ui-logo {
		gap: 6px;
		font-size: var(--fs-lg);

		&__image {
			width: 36px;
			height: 36px;
		}
	}
}

</style>
