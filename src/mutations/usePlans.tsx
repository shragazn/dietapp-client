import {
  addExerciseToPlan,
  createPlan,
  deletePlan,
  removeExerciseFromPlan,
  updatePlan,
} from "@/api/plans";
import { CreateExerciseDto } from "@/types/exercise";
import { UpdatePlanDto } from "@/types/plan";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePlans = (planId?: string) => {
  const queryClient = useQueryClient();
  const _createPlan = useMutation({
    mutationFn: createPlan,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workoutPlans"] });
    },
  });

  const _deletePlan = useMutation({
    mutationFn: deletePlan,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workoutPlans"] });
    },
  });

  const _updatePlan = useMutation({
    mutationFn: (updatePlanDto: UpdatePlanDto) =>
      updatePlan(planId!, updatePlanDto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workoutPlans", planId] });
    },
  });

  const _addExerciseToPlan = useMutation({
    mutationFn: (createExerciseDto: CreateExerciseDto) =>
      addExerciseToPlan(planId!, createExerciseDto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workout-plan", planId] });
    },
  });

  const _removeExerciseFromPlan = useMutation({
    mutationFn: (exerciseId: string) =>
      removeExerciseFromPlan(planId!, exerciseId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workout-plan", planId] });
    },
  });

  return {
    createPlan: _createPlan,
    deletePlan: _deletePlan,
    updatePlan: _updatePlan,
    addExerciseToPlan: _addExerciseToPlan,
    removeExerciseFromPlan: _removeExerciseFromPlan,
  };
};

export default usePlans;
