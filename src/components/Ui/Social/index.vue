<template>
	<ul class="ui-social">
		<li>
			<UiLink
				type="external"
				to="https://github.com/Fedor531"
			>
				Github
			</UiLink>
		</li>
		<li>
			<UiLink
				type="external"
				to="https://t.me/fedor531"
			>
				Telegram
			</UiLink>
		</li>
	</ul>
</template>

<style lang="postcss">
.ui-social {
	display: flex;
	justify-content: center;
	gap: 24px;

	.ui-link {
		font-size: calc(var(--fs-sm) - 1px);
	}
}
</style>
