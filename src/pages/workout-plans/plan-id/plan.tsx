import { getPlan } from "@/api/plans";
import AppHeader from "@/components/app-header/app-header";
import PlanExercise from "@/components/plan-exercise";
import PlanHeader from "@/components/plan-header";
import { Button } from "@/components/ui/button";
import PlanLiInput from "@/components/ui/plan-li-input";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { PlusCircle } from "lucide-react";
import { useRef } from "react";
import { LoaderFunctionArgs, useParams } from "react-router";

export type WorkoutPlanParams = {
  planId: string;
};

const workoutPlanQuery = (planId: string) => ({
  queryKey: ["workout-plan", planId],
  queryFn: async () => getPlan(planId),
});

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    if (!params.planId) throw new Error("planId is required");
    const query = workoutPlanQuery(params.planId);
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };

const Plan = () => {
  const { planId } = useParams<WorkoutPlanParams>();
  const { data } = useQuery(workoutPlanQuery(planId!));

  const titleRef = useRef<HTMLInputElement>(null);
  const handleStartAdding = () => {
    titleRef.current?.focus();
  };

  if (!data || !planId) return null;

  return (
    <>
      <AppHeader title={data.name} />
      <main className="grid gap-4 px-4 pb-4">
        <div className="flex justify-between">
          <PlanHeader name={data.name} planId={planId} />
          <Button
            variant="ghost"
            onClick={handleStartAdding}
            className="flex items-center gap-2"
          >
            <PlusCircle className="text-primary" />
          </Button>
        </div>
        <ul className="grid gap-2">
          {data.exercises?.map((exercise) => (
            <PlanExercise
              key={exercise.id}
              exercise={exercise}
              planId={planId}
            />
          ))}
          <PlanLiInput ref={titleRef} planId={planId} />
        </ul>
      </main>
    </>
  );
};

export default Plan;
