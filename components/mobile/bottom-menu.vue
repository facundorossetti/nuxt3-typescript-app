<template>
  <div v-if="store.logged" class="fixed bottom-0 sm:hidden mt-auto h-20 bg-secondary-white w-full flex items-center justify-between border-t border-yellow-400">
    <nuxt-link v-for="link in links" :key="link.name" :class="{'text-primary-red': link.active}" class="transition w-full text-center font-ballinger text-xs uppercase flex flex-col items-center gap-1" @click="changeToActive(link)">
      <span class="mdi mdi-rocket-launch text-xl active:relative active:bottom-1"></span>
      {{ link.name }}
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store/main';
const store = useStore();

const links = ref([
  { name:"overview", active: false},
  { name:"analitycs", active: false},
  { name:"positions", active: false},
  { name:"fund checker", active: false}
]);

// onMounted(() => {
//   const route = useRoute().fullPath;
//   if(route === "/login") {
//     changeToActive(links.value[0]);
//   }
// });
const changeToActive = (link: any) => {
  removeActive();
  link.active = true;
}
const removeActive = () => {
  links.value.forEach((e) => e.active = false);
};

</script>