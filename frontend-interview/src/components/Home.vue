<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-img
        class="mb-4"
        height="150"
        src="@/assets/logo.png"
      />

      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

        <h1 class="text-h2 font-weight-bold">AIron Pump</h1>
      </div>

      <div class="py-4" />

      <v-row>
        <v-col cols="12">
          <v-card
            class="py-4"
            color="surface-variant"
            image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png"
            prepend-icon="mdi-rocket-launch-outline"
            rounded="lg"
            variant="outlined"
          >
            <template #image>
              <v-img position="top right" />
            </template>

            <template #title>
              <h2 class="text-h5 font-weight-bold">Get started</h2>
            </template>

            <template #subtitle>
              <div class="text-subtitle-1">
               Join the fitness revolution with AIron Pump
              </div>
            </template>

            <template #actions>
              <v-btn
                color="primary"
                rounded
                text
                @click="initiateLogin"
              >
                Sign Up with Google
              </v-btn>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { initiateGoogleAuth, fakeAuthCallback } from '@/services/authService';
import type { User } from '@/services/authService';

const user = ref<User | null>(null);

import { useRouter } from 'vue-router';

const router = useRouter();

function initiateLogin() {
  // Pass the router instance to the service function
  initiateGoogleAuth(router);
}

// Simulate the callback flow
function handleAuthCallback() {
  // This would normally be triggered by a route change when Google redirects back to your app
  const userInfo = fakeAuthCallback();
  user.value = userInfo;
  localStorage.setItem('user', JSON.stringify(userInfo)); // Simulate session storage
}

// Call handleAuthCallback if there is a certain condition that mimics returning from Google
// This could be simulated by checking a fake query param in your app
if (window.location.search.includes("fake_auth=true")) {
  handleAuthCallback();
}
</script>
