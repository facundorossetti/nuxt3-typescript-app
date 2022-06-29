<template>
  <div class="w-full mx-auto bg-secondary-black">
    <div class="container mx-auto py-6 flex items-center justify-between px-4">
      <img class="cursor-pointer" src="@/assets/logos/njorda-logo.svg" alt="Njorda" @click="goTo('login')">
      <language-selector />
    </div>
  </div>
</template>