<template>
  <form-container>
    <p class="font-ballingerMono font-medium sm:text-4xl text-2xl mb-6 sm:mt-0 mt-10 sm:mr-20">CHOOSE YOUR BANK</p>
    <div class="max-h-96 overflow-y-scroll">
      <ul class="flex flex-col">
        <li v-for="bank in banks" :key="bank.name" class="px-4 py-2 flex items-center border-y border-gray-100 hover:bg-gray-hover cursor-pointer" @mouseover="showButton(bank)" @mouseleave="hideButton(bank)">
          <img class="w-10 h-10" src="@/assets/logos/avanza-logo.png" alt="avanza">
          <p class="ml-8">{{ bank.name }}</p>
          <button v-if="bank.active" class="ml-auto text-primary-green bg-green-click px-4 py-2 rounded-lg">CONNECT</button>
        </li>
      </ul>
    </div>
    <nj-button text="DONE" disabled />
    <a class="text-primary-green my-6 cursor-pointer">Don’t see your bank?</a>
    <a class="text-primary-green cursor-pointer">Try Njorda with a test account</a>
  </form-container>
</template>

<script setup lang="ts">
import { Ref } from 'vue';

const banks: Ref<{ name: string, active: boolean }[]> = ref([
  {name: "Avanza", active: false},
  {name: "Avanza", active: false},
  {name: "Avanza", active: false},
  {name: "Avanza", active: false},
  {name: "Avanza", active: false},
  {name: "Avanza", active: false},
  {name: "Avanza", active: false},
  {name: "Avanza", active: false},
  {name: "Avanza", active: false},
  {name: "Avanza", active: false},
  {name: "Avanza", active: false},
]);

const showButton = (bank: any): void => {
  bank.active = true;
};
const hideButton = (bank: any): void => {
  bank.active = false;
};
</script>
