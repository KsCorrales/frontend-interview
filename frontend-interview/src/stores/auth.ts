// src/stores/auth.ts
import { defineStore } from 'pinia';

interface userAuthState {
  user: User,
  assessment: Assessment
}

interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

interface Assessment {
  level: string,
  category: string,
  equipment: string,
}

export const useAuthStore = defineStore('auth', {
  state: (): userAuthState => ({
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    assessment: {
      level: '',
      category: '',
      equipment: ''
    }
  }),
  actions: {
    login(user: User) {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user)); // Persist user to localStorage
    },
    logout() {
      this.user = null;
      localStorage.removeItem('user'); // Clear user from localStorage
    },
    setAssesment(assessment: Assessment) {
      this.assessment = assessment
    }
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
    assessmentData: (state) => state.assessment,
  }
});
