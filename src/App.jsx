import { Route, Routes } from "react-router-dom";
import Forget from "./components/auth/Forget";
import Login from "./components/auth/Login";
import Reset from "./components/auth/Reset";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/panel/dashboard/Dasboard";
import Report from "./components/panel/report/Report";
import Upload from "./components/panel/upload/Upload";
import User from "./components/panel/users/User";
import "./style.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/report" element={<Report />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}
