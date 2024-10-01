<template>
	<div class="main-page global-padding">
		<div class="container">
<!--			<MainHero />-->
<!--			<MainWhatIDo />-->
<!--			<MainTestimonials />-->
		</div>
	</div>
</template>

<script lang="ts" setup>
import MainHero from './components/MainHero/index.vue';
import MainWhatIDo from './components/MainWhatIDo/index.vue';
import MainTestimonials from './components/MainTestimonials/index.vue';

const init1 = () => {
	// Создаем сцену, камеру и рендер
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	const renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(1000, 760);
	const main = document.querySelector('.main-page .container');
	main.appendChild(renderer.domElement);

	// Устанавливаем цвет фона (небо)
	scene.background = new THREE.Color(0x87CEEB); // Светло-голубой цвет
	//
	// const textureLoader = new THREE.TextureLoader();
	// const backgroundTexture = textureLoader.load('path/to/your/sky.jpg'); // Замените путь на ваше изображение
	// scene.background = backgroundTexture;





	const sunLight = new THREE.DirectionalLight(0xffffff, 1); // Белый свет с высокой интенсивностью
	sunLight.position.set(50, 200, -100); // Позиция "солнца" на небе
	sunLight.castShadow = true; // Позволяем свету отбрасывать тени
	sunLight.shadow.mapSize.width = 1024; // Разрешение теней
	sunLight.shadow.mapSize.height = 1024;
	sunLight.shadow.camera.near = 0.5; // Ближняя плоскость для тени
	sunLight.shadow.camera.far = 500; // Дальняя плоскость для тени
	scene.add(sunLight);

	// Добавляем слабый окружающий свет, чтобы осветить тёмные участки
	const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Низкая интенсивность
	scene.add(ambientLight);

	// Добавляем свет с уменьшенной интенсивностью
	// const ambientLight = new THREE.AmbientLight(0xffffff, 0.01); // Мягкий свет
	// scene.add(ambientLight);
	//
	// const pointLight = new THREE.PointLight(0xffffff, 1); // Точечный свет
	// pointLight.position.set(10, 10, 10);
	// scene.add(pointLight);





	// Загрузка OBJ модели
	// Загрузка материалов MTL перед OBJ
	const mtlLoader = new THREE.MTLLoader();
	mtlLoader.load('/3d/house_10.mtl', function (materials) {
		materials.preload();

		// Загрузка OBJ модели с материалами
		const objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials); // Применяем материалы к OBJ
		objLoader.load('/3d/house_10.obj', function (object) {
			scene.add(object);
			object.position.set(0, 0, 0); // Центрируем объект
		});
	});
	// const loader = new THREE.OBJLoader();
	// loader.load('/3d/house_10.obj', function (object) {
	// 	scene.add(object);
	// 	object.position.set(0, 0, 0); // Центрируем объект
	// });

	// Позиция камеры
	camera.position.set(0, 3, 7); // Камера расположена для лучшего обзора
	camera.lookAt(scene.position);

	// Добавляем OrbitControls для вращения и зума
	const controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.update();

	// Анимация
	function animate() {
		requestAnimationFrame(animate);
		controls.update();
		renderer.render(scene, camera);
	}
	animate();
}

const init2 = () => {
	// Создаем сцену, камеру и рендер
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	const renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(1000, 760);
	const main = document.querySelector('.main-page .container');
	main.appendChild(renderer.domElement);

	// Устанавливаем цвет фона (небо)
	scene.background = new THREE.Color(0x87CEEB); // Светло-голубой цвет
	//
	// const textureLoader = new THREE.TextureLoader();
	// const backgroundTexture = textureLoader.load('path/to/your/sky.jpg'); // Замените путь на ваше изображение
	// scene.background = backgroundTexture;





	const sunLight = new THREE.DirectionalLight(0xffffff, 1); // Белый свет с высокой интенсивностью
	sunLight.position.set(50, 200, -100); // Позиция "солнца" на небе
	sunLight.castShadow = true; // Позволяем свету отбрасывать тени
	sunLight.shadow.mapSize.width = 1024; // Разрешение теней
	sunLight.shadow.mapSize.height = 1024;
	sunLight.shadow.camera.near = 0.5; // Ближняя плоскость для тени
	sunLight.shadow.camera.far = 500; // Дальняя плоскость для тени
	scene.add(sunLight);

	// Добавляем слабый окружающий свет, чтобы осветить тёмные участки
	const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Низкая интенсивность
	scene.add(ambientLight);

	// Добавляем свет с уменьшенной интенсивностью
	// const ambientLight = new THREE.AmbientLight(0xffffff, 0.01); // Мягкий свет
	// scene.add(ambientLight);
	//
	// const pointLight = new THREE.PointLight(0xffffff, 1); // Точечный свет
	// pointLight.position.set(10, 10, 10);
	// scene.add(pointLight);





	// Загрузка OBJ модели
	// Загрузка материалов MTL перед OBJ
	const mtlLoader = new THREE.MTLLoader();
	mtlLoader.load('/3d/building_05.mtl', function (materials) {
		materials.preload();

		// Загрузка OBJ модели с материалами
		const objLoader = new THREE.OBJLoader();
		objLoader.setMaterials(materials); // Применяем материалы к OBJ
		objLoader.load('/3d/building_05.obj', function (object) {
			scene.add(object);
			object.position.set(0, 0, 0); // Центрируем объект
		});
	});
	// const loader = new THREE.OBJLoader();
	// loader.load('/3d/house_10.obj', function (object) {
	// 	scene.add(object);
	// 	object.position.set(0, 0, 0); // Центрируем объект
	// });

	// Позиция камеры
	camera.position.set(0, 3, 10); // Камера расположена для лучшего обзора
	camera.lookAt(scene.position);

	// Добавляем OrbitControls для вращения и зума
	const controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.update();

	// Анимация
	function animate() {
		requestAnimationFrame(animate);
		controls.update();
		renderer.render(scene, camera);
	}
	animate();
}

onMounted(() => {
	init1()
	init2()
})
</script>

<style lang="postcss">
.main-page {
	.container {
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 20px;

		gap: 20px;


		canvas {
			cursor: grab;
		}
	}
}
</style>
