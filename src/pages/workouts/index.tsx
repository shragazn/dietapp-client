import { Accordion } from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";
import Workout from "./components/workout";

export const workoutMenu = {
  title: "Workout",
  menuOptions: [
    {
      label: "edit workout",
      onClick: () => {},
    },
    {
      label: "delete workout",
      onClick: () => {},
    },
  ],
};

const Workouts = () => {
  return (
    <div className="grid gap-4 overflow-y-auto">
      <div className="grid gap-2">
        <Typography type="h4">This Week</Typography>
        <Accordion type="multiple">
          <Workout key={"monday"} title="Monday" />
          <Workout key={"tuesday"} title="Tuesday" />
          <Workout key={"wednesday"} title="Wednesday" />
        </Accordion>
      </div>
      <div className="grid gap-2">
        <Typography type="h4">Older</Typography>
        <Accordion type="multiple">
          <Workout key={"monday"} title="Monday" />
          <Workout key={"tuesday"} title="Tuesday" />
          <Workout key={"wednesday"} title="Wednesday" />
        </Accordion>
      </div>
    </div>
  );
};

export default Workouts;
