import { CreatePlanDto, Plan, UpdatePlanDto } from "@/types/plan";
import { client } from ".";
import { CreateExerciseDto } from "@/types/exercise";

export const getPlansByUser = async (userId: string) => {
  const { data } = await client.get<Plan[]>(`plans?userId=${userId}`);
  return data;
};

export const getPlan = async (planId: string) => {
  const { data } = await client.get<Plan>(`plans/${planId}`);
  return data;
};

export const createPlan = async (createPlanDto: CreatePlanDto) => {
  const { data } = await client.post<Plan>(`plans`, createPlanDto);
  return data;
};

export const updatePlan = async (
  planId: string,
  updatePlanDto: UpdatePlanDto,
) => {
  const { data } = await client.put<Plan>(`plans/${planId}`, updatePlanDto);
  return data;
};

export const deletePlan = async (planId: string) => {
  const { data } = await client.delete<Plan>(`plans/${planId}`);
  return data;
};

export const addExerciseToPlan = async (
  planId: string,
  createExerciseDto: CreateExerciseDto,
) => {
  try {
    const { data } = await client.post<Plan>(
      `plans/${planId}/exercises`,
      createExerciseDto,
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const removeExerciseFromPlan = async (
  planId: string,
  exerciseId: string,
) => {
  const { data } = await client.delete<Plan>(
    `plans/${planId}/exercises/${exerciseId}`,
  );
  return data;
};
