import usePlans from "@/mutations/usePlans";
import clsx from "clsx";
import { useRef, useState } from "react";
import { Form } from "react-router-dom";
import { Input } from "./ui/input";

type Props = {
  planId: string;
  name: string;
};

const PlanHeader = ({ name, planId }: Props) => {
  const { updatePlan } = usePlans(planId);
  const inputRef = useRef<HTMLInputElement>(null);
  const [planName, setPlanName] = useState(name);
  const handlePlanNameUpdate = () => {
    inputRef.current?.blur();
    if (planName === name) return;
    updatePlan.mutate({ name: planName });
  };
  return (
    <Form onSubmit={handlePlanNameUpdate} className="contents">
      <Input
        className={clsx(
          "rounded-none border-0 text-4xl font-extrabold tracking-tight focus-visible:border-b focus-visible:ring-0 focus-visible:ring-offset-0",
          updatePlan.isPending && "text-muted",
        )}
        onChange={(e) => setPlanName(e.target.value)}
        value={planName}
        onBlur={handlePlanNameUpdate}
        ref={inputRef}
      />
    </Form>
  );
};

export default PlanHeader;
