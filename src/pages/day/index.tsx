import AppHeader from "@/components/app-header/app-header";
import { Typography } from "@/components/ui/typography";
import { Outlet, useLoaderData } from "react-router";
import { Link } from "react-router-dom";

const data = [
  {
    title: "לחיצת חזה עליון",
    slug: "bench-press",
    sets: [
      { weight: 35, reps: 8 },
      { weight: 30, reps: 8 },
      { weight: 25, reps: 8 },
      { weight: 20, reps: 8 },
    ],
  },
  {
    title: "פרפר",
    slug: "butterfly",
    sets: [
      { weight: 62.5, reps: 8 },
      { weight: 62, reps: 8 },
      { weight: 60, reps: 8 },
    ],
  },
  {
    title: "פולי עליון",
    slug: "pulley",
    sets: [
      { weight: 50, reps: 8 },
      { weight: 50, reps: 8 },
      { weight: 50, reps: 8 },
    ],
  },
  {
    title: "פול אובר",
    slug: "pullover",
    sets: [
      { weight: 20, reps: 8 },
      { weight: 15, reps: 8 },
      { weight: 15, reps: 8 },
    ],
  },
  {
    title: "חתירה בפולי עליון",
    slug: "pulley-row",
    sets: [
      { weight: 25, reps: 8 },
      { weight: 25, reps: 8 },
      { weight: 25, reps: 8 },
    ],
  },
  {
    title: "יד אחורית",
    slug: "reverse-fly",
    sets: [
      { weight: 15, reps: 8 },
      { weight: 15, reps: 8 },
      { weight: 15, reps: 8 },
    ],
  },
  {
    title: "כיסא רומי",
    slug: "roman-chair",
    sets: [
      { weight: 85, reps: 8 },
      { weight: 85, reps: 8 },
      { weight: 80, reps: 8 },
    ],
  },
  {
    title: "יד קדמית",
    slug: "front-raise",
    sets: [
      { weight: 8, reps: 8 },
      { weight: 8, reps: 8 },
      { weight: 8, reps: 8 },
    ],
  },
];

export const loader = () => {
  return {
    date: new Date().toLocaleDateString("he", { dateStyle: "full" }),
    data,
  };
};

const Day = () => {
  const { date, data } = useLoaderData() as ReturnType<typeof loader>;

  return (
    <>
      <AppHeader title={date} />
      <main className="grid gap-4 px-4 pb-20">
        <div>
          <Typography type="h1">{date.split(",")[0]}</Typography>
          <Typography type="muted">{date.split(",")[1]}</Typography>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {data.map((exercise) => (
            <Link
              to={exercise.slug}
              className="grid w-full rounded-xl bg-foreground px-4 py-2 pb-24 text-start text-background"
            >
              <h2 className="w-full text-xl font-bold">{exercise.title}</h2>
              <span className="text-md text-muted-foreground">
                {exercise.sets.length} סטים
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Outlet />
    </>
  );
};

export default Day;
