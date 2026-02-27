
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import TeamMemberPage from "../../pages/TeamMemberPage";
import LoginPage from "../../pages/LoginPage";
import AdminPage from "../../pages/AdminPage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/team/:slug", element: <TeamMemberPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/admin", element: <AdminPage /> },
]);
