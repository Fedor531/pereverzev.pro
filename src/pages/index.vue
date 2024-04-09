<template>
  <h1>
    pereverzev.pro !!!
    {{ x }}
  </h1>
</template>

<script setup lang="ts">
console.log('TEST')
const x = ref<boolean>(false);
</script>
rsync --archive --compress --delete . root@62.109.4.55:/var/www/pereverzev.pro/nuxt/
