<template>
  <button class="w-full font-ballingerMono text-gray-400 font-medium p-3 rounded-lg border-solid border-2 border-gray-400 hover:border-primary-green hover:text-primary-green uppercase">
    <span :class="[icon, 'mdi']"></span>
    {{ social }}
  </button>
</template>

<script lang="ts">
export default {
  props: {
    social: {
      Type: String,
      Default: "google"
    },
    icon: {
      Type: String,
      Default: "google"
    },
  }
}
</script>