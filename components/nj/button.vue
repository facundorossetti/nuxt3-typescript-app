<template>
  <button class="mt-12 font-ballingerMono w-full p-3 bg-primary-red text-secondary-white rounded-lg font-medium sm:text-xl hover:bg-primary-redHover uppercase" :class="{'bg-gray-300 text-secondary-white pointer-events-none': disabled}" @click="$emit('click')">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  text: String,
  disabled: Boolean,
  goBackStyle: Boolean
})
</script>