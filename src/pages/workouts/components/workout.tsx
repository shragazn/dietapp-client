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

const Workout = ({ title }: Props) => {
  return (
    <AccordionItem
      value={title}
      className="bg-white bg-opacity-10 px-4 first:rounded-t-md last:rounded-b-md last:border-b-0"
    >
      <AccordionTrigger>
        <Typography type="p">{title}</Typography>
      </AccordionTrigger>
      <AccordionContent>
        <ul className="grid gap-2">
          <li className="flex justify-between">
            <Typography type="small" className="capitalize">
              upper chest bench press
            </Typography>
            <ul className="flex gap-2">
              <li>
                <Badge>35</Badge>
              </li>
              <li>
                <Badge>30</Badge>
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
            <Typography type="small">Bench Press</Typography>
            <ul className="flex gap-2">
              <li>
                <Badge>35</Badge>
              </li>
              <li>
                <Badge>30</Badge>
              </li>
              <li>
                <Badge>25</Badge>
              </li>
              <li>
                <Badge>20</Badge>
              </li>
            </ul>
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

export default Workout;
