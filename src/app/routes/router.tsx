
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import TeamMemberPage from "../../pages/TeamMemberPage";
import LoginPage from "../../pages/LoginPage";
import AdminPage from "../../pages/AdminPage";
import CalendarFullPage from "../../pages/CalendarPage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/calendar", element: <CalendarFullPage /> },
  { path: "/team/:slug", element: <TeamMemberPage /> },
  { path: "/orion", element: <LoginPage /> },
  { path: "/admin", element: <AdminPage /> },
]);
