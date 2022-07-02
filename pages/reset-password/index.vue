<template>
  <form-container>
    <p class="font-ballingerMono font-medium sm:text-4xl text-2xl sm:mt-0 mt-8 uppercase">
      Reset password
    </p>
    <p class="font-ballinger mb-6 mt-8">
      Enter your email address to reset your password.
    </p>
    <nj-input name="Email" />
    <nj-button text="reset" @click="goTo('reset-password/email-verification')" />
    <nj-back-button class="mt-8" path="login" @click="goTo('login')" />
  </form-container>
</template>
