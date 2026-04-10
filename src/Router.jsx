import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainMenu from "./pages/MainMenuPage";
import Schedule from "./pages/SchedulePage";
import History from "./pages/HistoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu />,
  },
  {
    path: "/schedule",
    element: <Schedule />
  },
  {
    path: '/history',
    element: <History />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />
}
