<template>
  <div class="l-default">
    <div class="l-default__sidebar">
      <AppHeader />
    </div>
    <div class="l-default__page">
      <main>
        <slot/>
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="postcss">
.l-default {
  display: flex;
  height: 100dvh;
}
</style>
