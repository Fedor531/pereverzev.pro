<template>
	<div class="o-main">
		<div class="o-main__container">
			<div class="o-main__image">
<!--				<img src="/assets/images/avatar.png" />-->
			</div>
			<div>
				<h4>
					Frontend-developer
				</h4>
				<h1>
					Fedor Pereverzev
				</h1>
				<p>
					Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.
				</p>
				<UiButton>
					Скачать CV
				</UiButton>
			</div>
		</div>
	</div>
</template>

<style lang="postcss">
.o-main {
	&__container {
		display: flex;
		align-items: center;
		gap: 60px;

		max-width: 800px;
		margin: 0 auto;
	}

	&__image {
		position: relative;

		display: block;
		overflow: hidden;

		min-width: 300px;

		height: 300px;

		border: 18px solid #FFF;
		border-radius: 6px;
		background-color: #FFF;
		box-shadow: 0 0 25px 0 rgb(0 0 0 / 10%);

		img {
			position: absolute;
			top: 0;
			left: 0;

			width: 100%;
		}
	}
}

</style>
