import { Exercise } from "@/types/exercise";
import { Trash2, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Typography } from "./ui/typography";
import usePlans from "@/mutations/usePlans";

type Props = {
  planId: string;
  exercise: Exercise;
};

const PlanExercise = ({ exercise, planId }: Props) => {
  const { removeExerciseFromPlan } = usePlans(planId);
  const { t } = useTranslation();

  const handleDeleteExercise = () => {
    removeExerciseFromPlan.mutate(exercise.id);
  };
  return (
    <li
      key={exercise.id}
      className="flex items-center justify-between rounded-lg bg-primary-foreground p-2 px-4"
    >
      <div>
        <Typography type="h4">{exercise.name}</Typography>
        <div className="flex items-center gap-2">
          <Typography type="muted">
            {exercise.sets} {t("sets")}
          </Typography>
          <X size={16} className="text-muted-foreground" />
          <Typography type="muted">
            {exercise.reps} {t("reps")}
          </Typography>
        </div>
      </div>
      <Button variant={"ghost"} onClick={handleDeleteExercise}>
        <Trash2 size={16} />
      </Button>
    </li>
  );
};

export default PlanExercise;
