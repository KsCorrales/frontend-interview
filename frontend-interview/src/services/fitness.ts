import { Exercise } from '../types/exercise.ts';
import exercisesData from './data/exercises.json'; // Importing JSON data

export class FitnessService {
  // todo - implement the logic to get the user assessment
  static getEquipmentOptions(): Promise<string[]> {
      const equipmentSet: Set<string> = new Set();
      (exercisesData as Exercise[]).forEach(exercise => {
          equipmentSet.add(exercise.equipment);
      });
      return Promise.resolve(Array.from(equipmentSet));
  }

  static getWorkoutByUserId(userId: string): Promise<Exercise[]> {
    // TODO: Assesment logic to be implemented
    return Promise.resolve(exercisesData.slice(0, 10) as Exercise[]);
  }

  static getWorkoutByUserAssessment(level: string, category: string, equipment: string, limit: number) {
    return Promise.resolve(exercisesData.filter((excercise) => {
      return excercise.level === level && excercise.category === category && excercise.equipment === equipment
    }).slice(0, limit) as Exercise[]);
  }
}
