import { defineStore } from 'pinia';

interface states {
  count: number,
  message?: string,
  arrayObjects?: object[],
}

export const useStore = defineStore({
  id: 'main',
  state: (): states => ({
    count: 0,
    message: "hello",
    arrayObjects: [{}]
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