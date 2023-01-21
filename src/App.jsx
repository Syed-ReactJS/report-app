import { Route, Routes } from "react-router-dom";
import Forget from "./components/auth/Forget";
import Login from "./components/auth/Login";
import Reset from "./components/auth/Reset";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/panel/dashboard/Dasboard";
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
    </Routes>
  );
}
