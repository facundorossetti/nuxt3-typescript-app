<template>
  <div class="min-h-screen flex flex-col justify-start items-center">
    <TheHeader />
    <div class="container sm:px-4 sm:mt-5">
      <slot />
    </div>
    <mobile-bottom-menu />
  </div>
</template>