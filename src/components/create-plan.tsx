import usePlans from "@/mutations/usePlans";
import { t } from "i18next";
import { Dumbbell, Plus } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const CreatePlan = () => {
  const { createPlan } = usePlans();
  const [planName, setPlanName] = useState("");

  const handlePlanChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlanName(e.target.value);
  };

  const handleAddPlan = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e?.preventDefault();
    createPlan.mutate({ name: planName, userId: "abc" });
    setPlanName("");
  };

  return (
    <form
      className="flex items-center gap-4 rounded bg-primary/10 px-4 py-2"
      onSubmit={handleAddPlan}
    >
      <Dumbbell size={24} className="text-primary" />
      <Input
        type="text"
        name="name"
        placeholder={t("workoutPlans.add new plan")}
        value={planName}
        onChange={handlePlanChange}
        className="w-auto rounded-none border-b border-none bg-transparent p-0 text-xl font-semibold focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button variant={"ghost"} type="submit" onSubmit={handleAddPlan}>
        <Plus size={20} />
      </Button>
    </form>
  );
};

export default CreatePlan;
