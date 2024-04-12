<template>
  <header class="app-header">
    <div class="app-header__top">
      <div class="app-header__logo-container">
        <NuxtLink
          class="app-header__logo"
          to="/"
        >
          <img src="~/assets/images/logo.svg" alt="logo">
        </NuxtLink>
        <NuxtLink
          class="app-header__logo-title"
          to="/"
        >
          pereverzev
        </NuxtLink>
      </div>
      <div class="app-header__hero-container">
        <div class="app-header__hero-image">
          <img src="~/assets/images/avatar-w-bg.png" alt="avatar" />
        </div>
        <div class="app-header__hero-content">
          <h3 class="app-header__hero-title">
            Fedor Pereverzev
          </h3>
          <p class="app-header__hero-desc">
            Frontend Developer
          </p>
          <span>

          </span>
        </div>
      </div>
    </div>
    <div class="app-header__bottom">

    </div>
  </header>
</template>

<style src="./style.pcss" />
<script setup lang="ts">
</script>
