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
  flex-direction: column;
  height: 100dvh;
  padding: 20px;
  color: white;
  gap: 30px;

  @media all and (--screen-tablet) {
    flex-direction: row;
    gap: 20px;
  }
}
</style>
