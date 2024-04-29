<template>
    <div class="auth-page">
      <h1>Mock Google Authentication</h1>
      <p>Please click "Authorize" to simulate signing in with Google.</p>
      <button @click="authorize">Authorize</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { fakeAuthCallback } from '@/services/authService';
  
  const router = useRouter();
  
  function authorize() {
    const userInfo = fakeAuthCallback();
    localStorage.setItem('user', JSON.stringify(userInfo)); // Simulate session storage
    router.push('/home'); // Redirect to the home page or dashboard
  }
  </script>
  
  <style scoped>
  .auth-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  