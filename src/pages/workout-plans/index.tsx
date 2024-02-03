import { getPlansByUser } from "@/api/plans";
import AppHeader from "@/components/app-header/app-header";
import CreatePlan from "@/components/create-plan";
import PlanCard from "@/components/plan-card";
import { Typography } from "@/components/ui/typography";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { LoaderFunctionArgs } from "react-router";

export type WorkoutPlansParams = {
  userId: string;
};

const workoutPlansQuery = (userId: string) => ({
  queryKey: ["workoutPlans"],
  queryFn: async () => getPlansByUser(userId),
});

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const query = workoutPlansQuery("abc");
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(workoutPlansQuery("abc")))
    );
  };

const Plans = () => {
  const { t } = useTranslation();
  const { data } = useQuery(workoutPlansQuery("abc"));

  return (
    <>
      <AppHeader title="Workout plans" />
      <main className="grid gap-4 px-4 pb-20">
        <Typography type="h1">{t("workoutPlans.title")}</Typography>
        <ul className="grid gap-2">
          <CreatePlan />
          {data?.map((plan) => <PlanCard key={plan.id} plan={plan} />)}
        </ul>
      </main>
    </>
  );
};

export default Plans;
