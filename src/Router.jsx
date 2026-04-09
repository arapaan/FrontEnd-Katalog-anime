import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import Schedule from "./pages/Schedule";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu />,
  },
  {
    path: "/test",
    element: <Schedule />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />
}
