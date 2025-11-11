import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/home/HomePage"  ;
import TeamMemberPage from "../../pages/TeamMemberPage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/team/:slug", element: <TeamMemberPage /> },
]);
