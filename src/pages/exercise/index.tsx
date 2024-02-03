import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Typography } from "@/components/ui/typography";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLoaderData, useNavigate } from "react-router";

export const loader = async () => {
  return {
    exercise: {
      title: "פרפר",
      sets: 4,
      reps: 8,
    },
    current: [
      { weight: 62.5, reps: 8 },
      { weight: 62, reps: 8 },
    ],
    previous: {
      sets: [
        { weight: 62.5, reps: 8 },
        { weight: 62, reps: 8 },
        { weight: 60, reps: 8 },
      ],
    },
  };
};

const Exercise = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { previous, exercise, current } = useLoaderData() as Awaited<
    ReturnType<typeof loader>
  >;

  const sets = useMemo(() => {
    return Array.from({ length: exercise.sets }, (_, i) => i + 1);
  }, [exercise.sets]);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen)
      setTimeout(() => {
        navigate("..");
      }, 300);
  };
  return (
    <Drawer
      open={open}
      shouldScaleBackground
      onOpenChange={handleOpenChange}
      fixed={false}
    >
      <DrawerContent className="bg-background px-4 pb-4 outline-none">
        <DrawerHeader>
          <DrawerTitle>
            <Typography type="h1">{exercise.title}</Typography>
          </DrawerTitle>
        </DrawerHeader>
        <div className="mt-4 grid gap-4 px-4 py-2">
          <Table>
            <TableHeader>
              <TableHead className="text-justify">{t("set")}</TableHead>
              <TableHead className="text-justify">{t("weight")}</TableHead>
              <TableHead className="text-justify">{t("reps")}</TableHead>
            </TableHeader>
            <TableBody>
              {sets.map((set, i) => (
                <TableRow key={set}>
                  <TableCell>{set}</TableCell>
                  <TableCell>
                    <Input
                      name="weight"
                      id="weight"
                      type="number"
                      className="w-16"
                      placeholder={previous.sets[i]?.weight.toString() || "-"}
                      value={current[i]?.weight.toString() || ""}
                    />
                  </TableCell>
                  <TableCell>
                    <Input
                      name="reps"
                      id="reps"
                      type="number"
                      className="w-16"
                      placeholder={previous.sets[i]?.reps.toString() || "-"}
                      value={current[i]?.reps.toString() || ""}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 flex gap-2 px-4">
          <Button className="w-full">Save</Button>
          <Button variant={"outline"} onClick={() => handleOpenChange(false)}>
            Cancle
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Exercise;
