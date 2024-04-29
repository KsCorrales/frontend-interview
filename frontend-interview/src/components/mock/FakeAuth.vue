<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Mock Google Authentication</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <p>Please click "Authorize" to simulate signing in with Google.</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark @click="authorize">
              Authorize
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();

function authorize() {
  const fakeUser = {
    id: '12345',
    name: 'John Doe',
    email: 'john@example.com',
    token: 'fake-token-123456'
  };
  authStore.login(fakeUser);
  router.push('/dashboard'); // Redirect to the dashboard after login
}
</script>
