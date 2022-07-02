<template>
  <div id="app">
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'Njorda App',
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
  ],
});
</script>

<style>
#app {
  background-color: theme('colors.yellow.200');
  font-family: "Ballinger-Regular", "sans-serif";
  color: theme('colors.secondary.black');
}
</style>
