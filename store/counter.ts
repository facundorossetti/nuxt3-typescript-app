import { defineStore } from 'pinia';

interface counter {
  count: number
}

export const useStore = defineStore({
  id: 'main',
  state: (): counter => ({
    count: 0
  }),
  actions: {
    increment(val:number = 1): void {
      this.count += val;
    },
  },
  getters: {
    doubleCount: (state: any) => state.count * 2,
  },
});