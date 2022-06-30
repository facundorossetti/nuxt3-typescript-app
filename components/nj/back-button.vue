<template>
  <nuxt-link class="flex justify-center items-center gap-4 font-ballingerMono w-full p-1 bg-transparent text-gray-400 rounded-xl border-2 cursor-pointer border-gray-400 hover:bg-transparent hover:text-primary-green hover:border-primary-green uppercase" @click="$emit('click')">
    <span class="mdi mdi-arrow-left text-xl"></span>
      BACK TO {{ path }}
  </nuxt-link>
</template>

<script setup lang="ts">
defineProps({
  path: String,
})
</script>