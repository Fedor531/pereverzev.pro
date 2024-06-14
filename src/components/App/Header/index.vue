<template>
	<header
		class="app-header global-padding"
		:class="{'mobile-menu-is-open': isOpen}"
	>
		<div class="container">
			<UiLogo />

			<div class="app-header__menu">
				<nav class="app-header__menu-nav">
					<ul class="app-header__menu-list">
						<li
							v-for="item in nav"
							:key="item.path"
							class="app-header__menu-item"
							@click="isOpen = false"
						>
							<UiLink :to="item.path">
								{{ item.title }}
							</UiLink>
						</li>
					</ul>
				</nav>
				<ThemeSwitcher />
			</div>

			<button
				class="app-header__menu-burger"
				aria-label="Мобильное меню"
				@click.prevent="toggleMenu"
			>
				<div />
			</button>
		</div>
	</header>
</template>

<script lang="ts" setup>
import ThemeSwitcher from './components/ThemeSwitcher/index.vue';

interface MenuItem {
	path: string,
	title: string,
}

const isOpen = ref<boolean>(false);

const toggleMenu = () => {
	isOpen.value = !isOpen.value;
};

const nav: MenuItem[] = [
	{
		path: '/',
		title: 'Главная',
	},
	{
		path: '/resume',
		title: 'Резюме',
	},
	// {
	// 	path: '/portfolio',
	// 	title: 'Портфолио',
	// },
];

watch(() => isOpen.value, (newValue) => {
	if (newValue) {
		document.body.style.overflow = 'hidden';
	}
	else {
		document.body.style.overflow = 'visible';
	}
});
</script>

<style lang="postcss" src="./style.pcss" />
