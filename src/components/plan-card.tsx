import { Plan } from "@/types/plan";
import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Typography } from "./ui/typography";

type Props = {
  plan: Plan;
};

const PlanCard = ({ plan }: Props) => {
  return (
    <li>
      <Link
        to={`/workout-plans/${plan.id}`}
        className="flex items-center gap-4 rounded bg-primary/10 px-4 py-2"
      >
        <Dumbbell size={24} className="text-primary" />
        <div className="grid">
          <Typography type="h4">{plan.name}</Typography>
          <Typography type="small" className="text-white/70">
            {plan.exercises &&
              plan.exercises
                .map(({ name }) => name)
                .join(", ")
                .slice(0, 30) + "..."}
          </Typography>
        </div>
      </Link>
    </li>
  );
};

export default PlanCard;
