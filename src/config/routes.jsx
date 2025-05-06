import Dashboard from "../modules/Dashboard";
import Mentors from "../modules/Mentors";
import Courses from "../modules/Courses";

export const routes = () => {
  return [
    {
      id: 1,
      path: "/",
      element: <Dashboard />
    },
    {
      id: 2,
      path: "/mentors",
      element: <Mentors />
    },
    {
      id: 3,
      path: "/courses",
      element: <Courses />
    },
  ]
}