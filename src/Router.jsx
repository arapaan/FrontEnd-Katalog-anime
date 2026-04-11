import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainMenu from "./pages/MainMenuPage";
import Schedule from "./pages/SchedulePage";
import History from "./pages/HistoryPage";
import ProfilePage from "./pages/ProfilePage";
import DetailPage from "./pages/DetailPage";

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
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/detail',
    element: <DetailPage />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />
}
