import Login from "@/pages/auth/login/login";
import Register from "@/pages/auth/register/register";
import Day, { loader as dayLoader } from "@/pages/day";
import Exercise, { loader as exerciseLoader } from "@/pages/exercise";
import Plans, { loader as workoutplansLoader } from "@/pages/workout-plans";
import Plan, { loader as planLoader } from "@/pages/workout-plans/plan-id/plan";
import Workouts, { loader as workoutLoader } from "@/pages/workouts";
import { QueryClient } from "@tanstack/react-query";
import { RouteObject } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./auth-layout";
import MainLayout from "./main-layout";

export const queryClient = new QueryClient();

const routeModel: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <div>summeries</div>,
      },
      {
        path: "/workout-plans",
        element: <Plans />,
        loader: workoutplansLoader(queryClient),
      },
      {
        path: "/workout-plans/:planId",
        element: <Plan />,
        loader: planLoader(queryClient),
      },
      {
        path: "/workouts",
        element: <Workouts />,
        loader: workoutLoader,
        children: [],
      },
      {
        path: "workouts/:workoutId",
        element: <Day />,
        loader: dayLoader,
        children: [
          {
            path: ":exerciseId",
            element: <Exercise />,
            loader: exerciseLoader,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

const router = createBrowserRouter(routeModel);
export default router;
