<template>
  <button
  class="mt-12 font-ballingerMono w-full p-3 bg-primary-red text-secondary-white rounded-lg font-medium sm:text-xl hover:bg-primary-redHover uppercase"
  :class="[goBackStyle ? 'bg-transparent text-gray-400 rounded-xl border-2  border-gray-400 hover:bg-transparent hover:text-primary-green hover:border-primary-green' : '']"
  @click="$emit('click')">
    <span v-if="goBackStyle" class="mdi mdi-arrow-left mr-2 text-xl"></span>
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  text: String,
  goBackStyle: Boolean
})
</script>