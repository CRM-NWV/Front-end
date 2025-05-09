import { Routes, Route } from "react-router-dom";
import Login from "./Layout/Login/Login";
import Main from "./Layout/Main/index"; // макет с Sidebar и <Outlet />
import Mentors from "./modules/Mentors";
import Courses from "./modules/Courses";
import Dashboard from "./modules/Dashboard"; // пример

import "./assets/scss/main.scss";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Main />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="mentors" element={<Mentors />} />
        <Route path="courses" element={<Courses />} />
      </Route>
    </Routes>
  );
}
