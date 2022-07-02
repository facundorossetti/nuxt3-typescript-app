<template>
  <form-container class="sm:max-w-lg">
    <p class="font-ballingerMono font-medium sm:text-4xl text-2xl sm:mt-0 mt-8 uppercase">
      Check your email
    </p>
    <p class="font-ballinger mb-8 mt-6">
      If you  have an count with us, we have sent a password reset link to <span class="text-primary-green">name@mail.com</span>
    </p>
    <div class="bg-green-click w-32 h-32 mx-auto rounded-full flex items-center justify-center">
      <span class="mdi mdi-email-receive-outline text-primary-green text-5xl" />
    </div>
    <nj-back-button class="mt-8" path="login" @click="goTo('login')" />
  </form-container>
</template>
