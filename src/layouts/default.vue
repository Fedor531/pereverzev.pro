<template>
	<div class="layout">
		<AppHeader />
		<main class="page">
			<slot />
		</main>
		<AppFooter />
	</div>
</template>

<script lang="ts" setup>
console.log('NUXT_ENVIRONMENT', useRuntimeConfig().public.NUXT_ENVIRONMENT)

const initYM = () => {
	if (typeof window.ym === 'function') {
		return
	}

	const script = document.createElement('script')
	script.setAttribute('defer', '')
	script.innerHTML = `
		   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
			   m[i].l=1*new Date();
			   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
			   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
			   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

			   ym(97752129, "init", {
					clickmap:true,
					trackLinks:true,
					accurateTrackBounce:true,
					webvisor:true
			   });
	`
	document.body.appendChild(script)
	const noscript = document.createElement('noscript')
	noscript.innerHTML = `<div><img src="https://mc.yandex.ru/watch/97752129" style="position:absolute; left:-9999px;" alt="" /></div>`
	document.body.appendChild(noscript)
}

onMounted(() => {
	const setVh = () => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	};

	window.addEventListener('resize', setVh);
	setVh();
	window.addEventListener('scroll', initYM)
});
</script>

<style>
.layout {
	position: relative;

	display: flex;
	flex-direction: column;

	height: 100vh; /* Fallback */
	height: calc(var(--vh, 1vh) * 100);
}

.page {
	display: flex;
	flex-direction: column;

	flex-grow: 1;
}
</style>
