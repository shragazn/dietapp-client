import { Plan } from "./plan";
import { Workout } from "./workout";

export type User = {
  id: string;
  email: string;
  name: string;
  workouts?: Workout[];
  plans: Plan[];
  createdAt: string;
  updatedAt: string;
};

export type CreateUserDto = {
  email: string;
  password: string;
};

export type UpdateUserDto = {
  email?: string;
  name?: string;
  password?: string;
};
