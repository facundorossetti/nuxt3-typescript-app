<template>
  <div class="bg-secondary-white mx-auto sm:w-max w-full sm:p-12 p-4 sm:mt-5 sm:max-w-xl">
    <div class="flex flex-col">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "form-container"
}
</script>