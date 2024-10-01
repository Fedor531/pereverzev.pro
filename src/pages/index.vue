<template>
	<ViewsMain />
</template>

<script lang="ts" setup>
useServerHead({
	script: [
		{
			src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
		},
		{
			src: 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/OBJLoader.js'
		},
		{
			src: 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js'
		},
		{
			src: 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/MTLLoader.js'
		}
	]
});
</script>
