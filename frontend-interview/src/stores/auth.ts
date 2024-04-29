// src/stores/useAuthStore.ts
import { defineStore } from 'pinia';

interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null') as User | null,
  }),
  actions: {
    login(user: User) {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user)); // Persist user to localStorage
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user'); // Clear user from localStorage
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.user
  }
});
