// src/types/exercise.ts

export interface Exercise {
    id: string;
    name: string;
    force: string;
    level: string;
    mechanic: string;
    equipment: string;
    primaryMuscles: string[];
    secondaryMuscles: string[];
    instructions: string[];
    category: string;
    images: string[];
  }
  
  export interface UserAssessment {
    userId: string;
  }
  