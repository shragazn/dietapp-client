import { lazy } from "react";
import { useRoutes } from "react-router";
import MainLayout from "./main-layout";
import { workoutMenu } from "@/pages/workouts";

const Workouts = lazy(() => import("@/pages/workouts"));

const routeModel = [
  {
    path: "*",
    element: (
      <MainLayout menu={workoutMenu}>
        <Workouts />
      </MainLayout>
    ),
  },
  {
    path: "/workouts",
    element: (
      <MainLayout menu={workoutMenu}>
        <Workouts />
      </MainLayout>
    ),
  },
];

export default function Routes() {
  return useRoutes(routeModel);
}
