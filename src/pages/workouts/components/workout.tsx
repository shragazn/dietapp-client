import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Typography } from "@/components/ui/typography";

type Props = {
  title: string;
};

const data = [
  {
    title: "לחיצת חזה עליון",
    sets: [
      { weight: 35, reps: 8 },
      { weight: 30, reps: 8 },
      { weight: 25, reps: 8 },
      { weight: 20, reps: 8 },
    ],
  },
  {
    title: "פרפר",
    sets: [
      { weight: 62.5, reps: 8 },
      { weight: 62, reps: 8 },
      { weight: 60, reps: 8 },
    ],
  },
  {
    title: "פולי עליון",
    sets: [
      { weight: 50, reps: 8 },
      { weight: 50, reps: 8 },
      { weight: 50, reps: 8 },
    ],
  },
  {
    title: "פול אובר",
    sets: [
      { weight: 20, reps: 8 },
      { weight: 15, reps: 8 },
      { weight: 15, reps: 8 },
    ],
  },
  {
    title: "חתירה בפולי עליון",
    sets: [
      { weight: 25, reps: 8 },
      { weight: 25, reps: 8 },
      { weight: 25, reps: 8 },
    ],
  },
  {
    title: "יד אחורית",
    sets: [
      { weight: 15, reps: 8 },
      { weight: 15, reps: 8 },
      { weight: 15, reps: 8 },
    ],
  },
  {
    title: "כיסא רומי",
    sets: [
      { weight: 85, reps: 8 },
      { weight: 85, reps: 8 },
      { weight: 80, reps: 8 },
    ],
  },
  {
    title: "יד קדמית",
    sets: [
      { weight: 8, reps: 8 },
      { weight: 8, reps: 8 },
      { weight: 8, reps: 8 },
    ],
  },
];

const Workout = ({ title }: Props) => {
  return (
    <AccordionItem
      value={title}
      className="bg-white bg-opacity-10 px-4 first:rounded-t-md last:rounded-b-md last:border-b-0"
    >
      <AccordionTrigger className="hover:no-underline">
        <Typography type="p">{title}</Typography>
      </AccordionTrigger>
      <AccordionContent>
        <ul className="grid gap-2">
          {data.map((item) => (
            <li className="flex justify-between">
              <Typography type="small" className="capitalize">
                {item.title}
              </Typography>
              <ul className="flex gap-2">
                {item.sets.map((set) => (
                  <li>
                    <Badge>
                      {set.weight}x{set.reps}
                    </Badge>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          {/* <li className="flex justify-between">
            <Typography type="small" className="capitalize">
              לחיצת חזה עליון
            </Typography>
            <ul className="flex gap-2">
              <li>
                <Badge variant={"destructive"}>35</Badge>
              </li>
              <li>
                <Badge variant={"secondary"}>30</Badge>
              </li>
              <li>
                <Badge>25</Badge>
              </li>
              <li>
                <Badge>20</Badge>
              </li>
            </ul>
          </li>
          <li className="flex justify-between">
            <Typography type="small">פרפר</Typography>
            <ul className="flex gap-2">
              <li>
                <Badge>62.5</Badge>
              </li>
              <li>
                <Badge>62</Badge>
              </li>
              <li>
                <Badge>60</Badge>
              </li>
            </ul>
          </li>
          <li className="flex justify-between">
            <Typography type="small">פולי עליון</Typography>
            <ul className="flex gap-2">
              <li>
                <Badge>50</Badge>
              </li>
              <li>
                <Badge>50</Badge>
              </li>
              <li>
                <Badge>50</Badge>
              </li>
            </ul>
          </li>
          <li className="flex justify-between">
            <Typography type="small">פול אובר</Typography>
            <ul className="flex gap-2">
              <li>
                <Badge>20</Badge>
              </li>
              <li>
                <Badge>15</Badge>
              </li>
              <li>
                <Badge>15</Badge>
              </li>
            </ul>
          </li>
          <li className="flex justify-between">
            <Typography type="small">חתירה בפולי עליון</Typography>
            <ul className="flex gap-2">
              <li>
                <Badge>25</Badge>
              </li>
              <li>
                <Badge>25</Badge>
              </li>
              <li>
                <Badge>25</Badge>
              </li>
            </ul>
          </li>
          <li className="flex justify-between">
            <Typography type="small">יד אחורית</Typography>
            <ul className="flex gap-2">
              <li>
                <Badge>15</Badge>
              </li>
              <li>
                <Badge>15</Badge>
              </li>
              <li>
                <Badge>15</Badge>
              </li>
            </ul>
          </li>
          <li className="flex justify-between">
            <Typography type="small">כיסא רומי</Typography>
            <ul className="flex gap-2">
              <li>
                <Badge>85</Badge>
              </li>
              <li>
                <Badge>85</Badge>
              </li>
              <li>
                <Badge>80</Badge>
              </li>
            </ul>
          </li>
          <li className="flex justify-between">
            <Typography type="small">יד קדמית</Typography>
            <ul className="flex gap-2">
              <li>
                <Badge>8</Badge>
              </li>
              <li>
                <Badge>8</Badge>
              </li>
              <li>
                <Badge>8</Badge>
              </li>
            </ul>
          </li> */}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Workout;
