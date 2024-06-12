<template>
  <NuxtLink class="ui-logo" to="/">
    <div class="ui-logo__letter logo-letter">
      F
    </div>
    <div class="logo-text">
      <span class="logo-text__name">
        Fedor
      </span>
      Pereverzev
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>

</script>

<style lang="postcss">
.ui-logo {
	display: flex;
	align-items: center;

	&__letter {
		margin-right: 8px;
	}
}

.logo-letter {
	display: flex;
	align-items: center;
	justify-content: center;

	width: 44px;
	height: 44px;

	border-radius: 100px;
	background-color: var(--color-blue);

	font-size: var(--fs-4xl);
	font-weight: 600;
}

.logo-text {

	font-size: var(--fs-xl);

	&__name {
		font-weight: 600;
	}
}

@media all and (--screen-tablet) {
	.logo-letter {
		width: 32px;
		height: 32px;

		font-size: var(--fs-lg);
	}

	.logo-text {
		font-size: var(--fs-lg);
	}
}

</style>
