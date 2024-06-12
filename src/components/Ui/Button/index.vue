<template>
	<button class="ui-button">
		<slot />
	</button>
</template>

<style lang="postcss">
.ui-button {
	padding: 12px 30px;

	cursor: pointer;
	transition: all 0.3s ease-in-out;

	border: 2px solid var(--color-blue);
	border-radius: 30px;
	background-color: var(--color-white);
	box-shadow: 0 10px 10px -8px rgb(0 0 0 / 22%);

	font-size: var(--fs-sm);

	&:hover {
		color: var(--color-white);
		background-color: var(--color-blue);
	}
}
</style>
