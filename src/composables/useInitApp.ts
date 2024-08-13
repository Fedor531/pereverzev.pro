export default () => {
	const colorScheme = useCookie('color-scheme');

	let lightMedia = '(prefers-color-scheme: light)';
	let darkMedia = '(prefers-color-scheme: dark)';

	if (colorScheme.value) {
		lightMedia = (colorScheme.value === 'light') ? 'all' : 'not all';
		darkMedia = (colorScheme.value === 'dark') ? 'all' : 'not all';
	}

	useServerHead({
		meta: [
			{
				'data-theme': 'light',
				name: 'theme-color',
				media: lightMedia,
				content: 'var(--secondary-text-color)',
			},
			{
				'data-theme': 'dark',
				name: 'theme-color',
				media: darkMedia,
				content: '#222'
			},
		],
		link: [
			{
				'data-theme': 'light',
				rel: 'stylesheet',
				media: lightMedia,
				href: '/assets/styles/light.css'
			},
			{
				'data-theme': 'dark',
				rel: 'stylesheet',
				media: darkMedia,
				href: '/assets/styles/dark.css'
			}
		]
	});
}
