import AppHeader from "@/components/app-header/app-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { PlusIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

const mockData = [
  {
    title: "This Week",
    workouts: [
      {
        date: "2021-08-08",
        id: "1",
      },
      {
        date: "2021-08-10",
        id: "2",
      },
      {
        date: "2021-08-12",
        id: "3",
      },
    ],
  },
  {
    title: "Last Week",
    workouts: [
      {
        date: "2021-08-01",
        id: "4",
      },
      {
        date: "2021-08-03",
        id: "5",
      },
      {
        date: "2021-08-05",
        id: "6",
      },
    ],
  },
  {
    title: "This Month",
    workouts: [
      {
        date: "2021-08-15",
        id: "7",
      },
      {
        date: "2021-08-17",
        id: "8",
      },
      {
        date: "2021-08-19",
        id: "9",
      },
      {
        date: "2021-08-22",
        id: "10",
      },
      {
        date: "2021-08-24",
        id: "11",
      },
      {
        date: "2021-08-26",
        id: "12",
      },
    ],
  },
];

export const loader = () => {
  return { data: mockData };
};

const Workouts = () => {
  const { t } = useTranslation();
  const { data } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  return (
    <>
      <AppHeader title={t("workouts.title")} />
      <main className="grid gap-4 px-4">
        <Typography type="h1">{t("workouts.title")}</Typography>
        <Button>
          <PlusIcon />
        </Button>
        <div className="grid gap-4 overflow-y-auto">
          {data.map((timeGroup) => (
            <div className="grid gap-4">
              <Typography type="h4">{timeGroup.title}</Typography>
              {timeGroup.workouts.map((workout) => (
                <Link to={workout.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        {
                          new Date(workout.date)
                            .toLocaleDateString("he", {
                              dateStyle: "full",
                            })
                            .split(",")[0]
                        }
                      </CardTitle>
                      <CardDescription>
                        {
                          new Date(workout.date)
                            .toLocaleDateString("he", {
                              dateStyle: "full",
                            })
                            .split(",")[1]
                        }
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Workouts;
