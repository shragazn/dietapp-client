import { Plan } from "./plan";

export type Exercise = {
  id: string;
  name: string;
  planId?: string;
  plan: Plan;
  sets: number;
  reps: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateExerciseDto = {
  name: string;
  planId: string;
  sets: number;
  reps: number;
};

export type UpdateExerciseDto = {
  id: string;
} & Partial<CreateExerciseDto>;
