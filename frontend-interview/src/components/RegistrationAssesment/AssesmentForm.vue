<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark>
            <v-toolbar-title
              >Welcome!, this is the assesment to grant to you the best
              experience in our gym.</v-toolbar-title
            >
          </v-toolbar>
          <v-card-text>
            <p class="pb-4">
              Please fill all the inputs to let us know your objective and
              current status.
            </p>
            <section class="py-2">
              <p>Pick your fitness level</p>
              <v-radio-group v-model="level">
                <v-radio label="Beginner" value="beginner"></v-radio>
                <v-radio label="Intermediate" value="intermediate"></v-radio>
                <v-radio label="Expert" value="expert"></v-radio>
              </v-radio-group>
            </section>
            <section class="py-2">
              <p>Which is your training focus?.</p>
              <v-radio-group v-model="category">
                <v-radio label="Strength" value="strength"></v-radio>
                <v-radio label="Stretching" value="stretching"></v-radio>
                <v-radio label="Plyometrics" value="plyometrics"></v-radio>
                <v-radio label="Strongman" value="strongman"></v-radio>
                <v-radio label="Powerlifting" value="powerlifting"></v-radio>
              </v-radio-group>
            </section>
            <section class="py-2">
              <p>Choose your equipment.</p>
              <v-autocomplete
                class="pt-4"
                v-model="equipment"
                label="Select Equipment"
                :items="equipments"
              ></v-autocomplete>
            </section>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark @click="authorize">Submit </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useAuthStore } from "../../stores/auth";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { FitnessService } from "../../services/fitness";

const level = ref("");
const category = ref("");
const equipment = ref("");

const equipments = ref<string[]>([]);

const router = useRouter();
const authStore = useAuthStore();

onMounted(async () => {
  try {
    const response = await FitnessService.getEquipments();
    equipments.value = response;
  } catch (error) {
    console.error("Error fetching equipments:", error);
  }
});

function authorize() {
  const assesment = {
    level: level.value || "",
    category: category.value || "",
    equipment: equipment.value || "",
  };
  authStore.setAssesment(assesment);
  router.push("/dashboard"); // Redirect to the dashboard after login
}
</script>
