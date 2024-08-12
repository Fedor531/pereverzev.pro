<template>
	<button class="ui-button">
		<slot />
	</button>
</template>

<style lang="postcss">
.ui-button {
	padding: 12px 30px;

	cursor: pointer;
	transition: background-color 0.3s ease-in-out;

	border: 2px solid var(--color-blue);
	border-radius: 30px;
	background-color: transparent;
	box-shadow: 0 10px 10px -8px rgb(0 0 0 / 22%);
	color: var(--primary-text-color);

	font-size: var(--fs-sm);

	&:hover {
		color: var(--color-white);
		background-color: var(--color-blue);
	}
}
</style>
