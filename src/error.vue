<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script lang="ts" setup>
await navigateTo('/', { redirectCode: 301 });
</script>
