<template>
  <div class="flex mt-10 gap-8">
    <h1>Counter component: {{ contador }}</h1>
    <h2>{{ message }}</h2>
    <button class="p-4 bg-primary-pink rounded m-4" @click="incrementar">INCREMENT</button>
  </div>
</template>

<script setup lang="ts">
import { incrementValue } from '../composables/incrementValue';

// DECLARE PROPS WITH DEFAULT VALUES
interface props {
  message?: string
}
const props = withDefaults(defineProps<props>(), {
  message: "some props"
});

// EMIT EVENTS
const emit = defineEmits(['click']);
const pressedButton = () => emit("click");

// USE COMPOSABLE FUNCTIONS
const contador: any = incrementValue();
const incrementar = (): number => contador.value++;
</script>