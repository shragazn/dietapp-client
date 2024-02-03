import { Exercise } from "./exercise";
import { Workout } from "./workout";

export type Plan = {
  id: string;
  name: string;
  userId: string;
  workouts: Workout[];
  exercises?: Exercise[];
  createdAt: string;
  updatedAt: string;
};

export type CreatePlanDto = {
  name: string;
  userId: string;
};

export type UpdatePlanDto = {
  name: string;
};
