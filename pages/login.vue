<template>
  <form-container>
    <p class="font-ballingerMono font-medium sm:text-4xl text-2xl mb-6 sm:mt-0 mt-12">YOUR ECONOMY COMPASS</p>
    <div class="flex mb-6">
      <p>No account?</p>
      <NuxtLink to="/sign-up" class="ml-2 text-primary-green hover:underline">Create account</NuxtLink>
    </div>
    <nj-input name="Email" class="mb-8" />
    <nj-input password name="Password" :autocomplete="false" >
      <NuxtLink to="/reset-password" class="text-primary-green hover:underline" for="password">Forgot your password?</NuxtLink>
    </nj-input>
    <nj-button text="login" />
    <OrDivider />
    <div class="flex gap-6">
      <social-login-button social="google" icon="mdi-google" />
      <social-login-button social="apple" icon="mdi-apple"/>
    </div>
  </form-container>
</template>
