import { Exercise, UserAssessment } from '@/types/exercise';
import exercisesData from '@/services/data/exercises.json'; // Importing JSON data

export class FitnessService {
  static getUserWorkout(userAssessment: UserAssessment): Promise<Exercise[]> {
    // Filtering or custom logic to select exercises based on the user assessment
    // For now, returns all exercises directly
    return Promise.resolve(exercisesData as Exercise[]);
  }

  static getWorkoutByUserId(userId: string): Promise<Exercise[]> {
    // Here, you could add logic to filter or customize workouts based on user ID
    return Promise.resolve(exercisesData as Exercise[]);
  }
}
