<template>
  <div>
    <div class="flex mb-2 justify-between">
      <label :for="name">{{ name }}</label>
      <slot />
    </div>
    <div class="relative flex items-center">
      <input :type="password ? type : 'text'" :name="name" :autocomplete="autocomplete ? 'on' : 'off'" class="pl-4 pr-10 outline outline-offset-0 outline-1 rounded-lg outline-gray-200 focus:outline-primary-green h-12" :class="{'w-full': block}" v-model="data">
      <span v-if="password" class="absolute right-0 mdi px-4 text-gray-400 cursor-pointer text-xl" :class="type === 'text' ? 'mdi-eye-off' : 'mdi-eye'" @click="changeType"></span>
    </div>
    <span v-for="error in errors" :key="error.message">{{ error.message }}</span>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    autocomplete: {
      type: Boolean,
      default: true
    },
    block: {
      type: Boolean,
      default: true
    },
    password: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      type: "password",
      errors: [],
      data: ""
    }
  },
  methods: {
    changeType() {
      if(this.type === "text") {
        this.type = "password";
      } else if (this.type === "password") {
        this.type = "text";
      }
    },
  }
}
</script>

