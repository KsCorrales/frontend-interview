<template>
  <v-app>
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
          <v-expansion-panel v-for="exercise in workoutPlan" :key="exercise.id">
            <v-expansion-panel-title>{{ exercise.name }}</v-expansion-panel-title>
            <v-expansion-panel-text>
              <div>
                <p>{{ exercise.description }}</p>
                <v-list dense>
                  <!-- List of sets for the exercise -->
                  <v-list-item-group v-model="exercise.completedSets">
                    <v-list-item v-for="(set, index) in exercise.sets" :key="index">
                      <v-list-item-content>
                        Set {{ index + 1 }}: {{ set.reps }} reps
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-checkbox :input-value="set.completed" @click="markSetAsCompleted(exercise, index)"></v-checkbox>
                      </v-list-item-action>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth';
import type FitnessService from '@/services/fitness'; // Import your Axios instance
import { Exercise } from '@/types/exercise'; // Import the Exercise type

const router = useRouter();
const authStore = useAuthStore();
// Sample data for the workout plan with descriptions
const workoutPlan = ref([
  {
    id: 1,
    name: 'Push-ups',
    description: 'A push-up is a common calisthenics exercise beginning from the prone position.',
    sets: [
      { reps: 10, completed: false },
      { reps: 12, completed: false },
      { reps: 15, completed: false }
    ]
  },
  {
    id: 2,
    name: 'Pull-ups',
    description: 'Pull-ups are performed by lifting your body up to a bar and lowering yourself back down.',
    sets: [
      { reps: 5, completed: false },
      { reps: 5, completed: false },
      { reps: 5, completed: false }
    ]
  },
  {
    id: 3,
    name: 'Squats',
    description: 'A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.',
    sets: [
      { reps: 15, completed: false },
      { reps: 15, completed: false },
      { reps: 20, completed: false }
    ]
  }
]);


const drawer = ref(false);
const exercises = ref<Exercise[]>([]);
const fitness = new FitnessService();

onMounted(async () => {
  try {
    // Fetch exercises from the API
    const response = await fitness.getExercises();
    exercises.value = response.data;
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

// Function to mark a set as completed
function markSetAsCompleted(exercise, setIndex) {
  exercise.sets[setIndex].completed = !exercise.sets[setIndex].completed;
}
</script>
