<template>
  <button class="relative bg-secondary-black-light p-3 flex gap-2 text-secondary-white rounded-md" @click="toggleMenu">
    <span class="mdi mdi-web"></span>
    <span>English</span>
    <span class="mdi mdi-chevron-down ml-3"></span>
    <transition name="from-top-fade">
      <div v-if="isMenu" ref="target" class="absolute -bottom-24 right-0 bg-secondary-black-light w-full rounded-md">
        <ul class="flex flex-col gap-1">
          <li class="hover:bg-gray-400 p-3 rounded-md">English</li>
          <li class="hover:bg-gray-400 p-3 rounded-md">Swedish</li>
        </ul>
      </div>
    </transition>
  </button>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core';

const target = ref(null);
const isMenu = ref(false);
onClickOutside(target, () => closeMenu());
const toggleMenu = () => isMenu.value = !isMenu.value;
const closeMenu = () => isMenu.value = false;

</script>