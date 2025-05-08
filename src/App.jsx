import { Routes, Route } from "react-router-dom";
import Login from "./Layout/Login/Login";
import Main from "./Layout/Main/index";
import "./assets/scss/main.scss";

export default function Layout() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Main />} />
    </Routes>
  );
}