<template>
  <div>
    <div class="w-80 h-80 flex items-center justify-center">
      <nj-spinner v-if="pendingDogs"></nj-spinner>
      <img v-if="!pendingDogs" :src="dogs.message" alt="dog" class="h-full">
    </div>
    <button class="p-4 bg-primary-pink rounded m-4" @click="refreshDogs">Reload Image</button>
    <h2>{{ computedProp }}</h2>
    <counter message="message"></counter>
    <h2>Counter Login page: {{ contador }}</h2>
    <div>
      <h2>Count is {{ store.count }} </h2>
      <h2>Double is {{ store.doubleCount }} </h2>
      <button class="p-4 bg-primary-pink rounded m-4" @click="store.increment(2)">INCREMENT STORE COUNT</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// IMPORT REF TYPE FROM VUE
import { Ref } from 'vue';

// USE PINIA STORE
import { useStore } from '@/store/main';
const store = useStore();

// FETCH DATA USING HOOKS (composable default functions)
const { 
  data:dogs, 
  pending:pendingDogs,
  refresh:refreshDogs 
}: any = await useFetch((): any => 'https://dog.ceo/api/breeds/image/random', {pick: ['message']});

// LIFECYCLE HOOKS
onBeforeMount(() => console.log("beforeMount"));
onMounted(() => console.log("Mounted"));

// WATCHERS AND COMPUTED PROPS
const contador: Ref<number> = incrementValue();
watch(contador, (newVal: number) => console.log(newVal));
const computedProp = computed(()=> "I am a computed prop.");
</script>