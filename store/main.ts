import { defineStore } from 'pinia';

interface states {
  count?: number,
  logged: boolean,
  message?: string,
  arrayObjects?: object[],
}

export const useStore = defineStore({
  id: 'main',
  state: (): states => ({
    count: 0,
    logged: false,
    message: "hello",
    arrayObjects: [{}]
  }),
  actions: {
    increment(val:number = 1): void {
      this.count += val;
    },
    login(): void {
      this.logged = true;
    },
    logout(): void {
      this.logged = false;
    },
  },
  getters: {
    doubleCount: (state: any) => state.count * 2,
  },
});