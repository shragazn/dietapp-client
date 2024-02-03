import { Exercise } from "./exercise";
import { Plan } from "./plan";
import { User } from "./user";

export type Workout = {
  id: string;
  date: Date;
  userId: string;
  user: User;
  name: string;
  planId: string;
  plan?: Plan;
  exercises?: Exercise[];
  createdAt: string;
  updatedAt: string;
};

export type CreateWorkoutDto = {
  date: Date;
  userId: string;
  name: string;
  planId: string;
};

export type UpdateWorkoutDto = Partial<Omit<CreateWorkoutDto, "userId">>;
