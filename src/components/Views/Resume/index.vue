<template>
	<div class="p-resume">
		<UiPageTitle
			title="Резюме"
			subTitle="~4 года в IT"
		/>

		<div class="p-resume__timelines">
			<div class="p-resume__content">
<!--				<OTimeline-->
<!--					title="Опыт работы"-->
<!--					:list="works"-->
<!--				/>-->
<!--				<OTimeline-->
<!--					title="Самозанятость"-->
<!--					:list="selfEmployment"-->
<!--				/>-->
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const works = [
	{
		id: 3,
		period: '2022 - н.в.',
		company: 'ООО «ЭЙС Солюшнс»',
		companyLink: 'https://code-pilots.ru/',
		title: 'Middle+ Frontend developer',
		description: [
			{
				text: '— Разработка e-commerce проектов на Nuxt.js v3 (Composition API) + Pinia, TypeScript',
				// portfolioLink: '/portfolio/#toomanygifts',
			},
			{
				text: '— Разработка на Vue v3, TypeScript (админки для e-commerce проектов, личные кабинеты)',
				// portfolioLink: '/portfolio/#admin-panels',
			},
			{
				text: '— Доработка и исправление багов opensource проекта, написанного внутри компании на Vue.js v3, TypeScript.',
			},
		],
	},
	{
		id: 2,
		period: '2021 - 2022',
		company: 'ООО «Флексби»',
		companyLink: 'https://flexbe.ru/',
		title: 'Middle Frontend developer',
		description: [
			{
				text: '— Разработка и внедрение нового интерфейса на нативном JavaScript, TypeScript, jQuery, Riot.js, Node.js',
			},
			{
				text: '— Работа с legacy кодом: исправление багов, улучшение функциональности и скорости работы сервиса',
			},
			{
				text: '— Оптимизация скорости загрузки сайтов (critical css, lazy load изображений, отложенная загрузка пользовательских скриптов)',
			},
		],
	},
	{
		id: 1,
		period: '2020 - 2021',
		company: 'ООО «Т-студия»',
		companyLink: 'https://tdsgn.ru/',
		title: 'Junior Frontend developer',
		description: [
			{
				text: '— Разработка SPA на Vue.js v2',
			},
			{
				text: '— Разработка сайтов на посадку Битрикс24 на нативном JavaScript и jQuery',
			},
		],
	},
	{
		id: 0,
		period: '2020',
		company: 'ООО «Элекард-мед»',
		companyLink: 'https://elecard-med.com/',
		title: 'Junior Frontend developer',
		description: [
			{
				text: '— Техническая поддержка сайта написанного на php-фреймворке Yii v1.1',
			},
			{
				text: '— Принимал участие в разработке нового сайта компании',
			},
			{
				text: '— Разработка SPA на Vue.js v2',
			},
			{
				text: '— Разработка на Node.js - создание отчетов (генерация html документов) по большому количеству данных из имеющихся json-файлов от медицинских учреждений',
			},
		],
	},
];

const selfEmployment = [
	{
		id: 0,
		period: '2022 - 2023',
		company: 'Winestyle',
		companyLink: 'https://winestyle.ru/',
		title: 'Middle+ Frontend developer',
		description: [
			{
				text: '— Разработка новго сайта компании на Nuxt.js v3 (composition-api) + TypeScript',
			},
			{
				text: '— Оптимизация скорости работы сайта (кастомная сборка иконок, кеширование компонентов на сервере)',
			},
		],
	},
];
</script>

<style lang="postcss">
.p-resume {
	&__timelines {
		padding: 0 40px;
	}

	&__content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		max-width: var(--container-width);
		margin: 0 auto;
		gap: 40px;
	}
}

@media all and (width <= 990px) {
	.p-resume {
		&__timelines {
			padding: 0 16px;
		}

		&__content {
			grid-template-columns: 1fr;
			gap: 20px;
			flex-direction: column;
		}
	}
}
</style>
