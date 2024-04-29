// src/router/index.ts

import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import FakeAuthPage from '@/components/FakeAuth.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/fake-auth', component: FakeAuthPage },
  // other routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
