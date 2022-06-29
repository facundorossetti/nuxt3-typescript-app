<template>
  <form-container>
    <p class="font-ballingerMono font-medium sm:text-4xl text-2xl mb-6 sm:mt-0 mt-12">CREATE AN ACCOUNT</p>
    <div class="flex mb-6">
      <p>Have an account?</p>
      <NuxtLink to="/login" class="ml-2 text-primary-green hover:underline">Login</NuxtLink>
    </div>
    <nj-input name="Name" class="mb-8" />
    <nj-input name="Email" class="mb-8" />
    <nj-input password name="Password" :autocomplete="false" ></nj-input>
    <nj-button text="Next" />
    <OrDivider />
    <div class="flex gap-6">
      <social-login-button social="Google" icon="mdi-google" />
      <social-login-button social="Apple" icon="mdi-apple"/>
    </div>
  </form-container>
</template>
