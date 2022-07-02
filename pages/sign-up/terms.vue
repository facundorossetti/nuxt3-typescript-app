<template>
  <form-container>
    <p class="font-ballingerMono font-medium sm:text-4xl text-2xl mb-6 sm:mt-0 mt-10">
      Accept terms
    </p>
    <p class="font-ballinger mb-6">
      We value your privacy and we will never share your data or e-mail with anyone outside of Njorda.
    </p>
    <p class="font-ballinger">
      By clicking "Accept", I agree that Njorda processes my personal data in accordance with Njorda's Personal data policy.
    </p>
    <nj-button text="Accept" @click="goTo('sign-up/select-bank')" />
  </form-container>
</template>
