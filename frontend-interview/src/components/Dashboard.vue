<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth'
import { FitnessService } from '../services/fitness'; // Import the FitnessService class
import { Exercise } from '../types/exercise'; // Import the Exercise type

const router = useRouter();
const authStore = useAuthStore();
const drawer = ref(false);
const exercises = ref<Exercise[]>([]);

onMounted(async () => {
  try {
    // Fetch exercises from the API
    const response = await FitnessService.getWorkoutByUserId(authStore.user!.id);
    exercises.value = response;
  } catch (error) {
    console.error('Error fetching exercises:', error);
  }
});



// Function to logout
function logout() {
  // Placeholder for logout logic
  authStore.logout();
  router.push('/');
}

</script>

<template>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Workout Dashboard</v-toolbar-title>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <!-- Navigation Drawer/Sidebar -->
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list dense>
        <v-list-item link @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-expansion-panels>
          <!-- Each exercise as an expandable panel -->
          <v-expansion-panel v-for="exercise in exercises" :key="exercise.id">
            <v-expansion-panel-title>{{ exercise.name }}</v-expansion-panel-title>
            <v-expansion-panel-text>
              <div>
                <!--TODO: image-->
                <p v-for="(instructions) in exercise.instructions">{{ instructions }}</p>
                <v-list dense>
                  <!-- TODO: sets and reps -->
                </v-list>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-main>
</template>
