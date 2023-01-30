import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Forget from "./components/auth/Forget";
import Login from "./components/auth/Login";
import Reset from "./components/auth/Reset";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/panel/dashboard/Dasboard";
import Report from "./components/panel/report/Report";
import Upload from "./components/panel/upload/Upload";
import User from "./components/panel/users/User";
import AuthContext from "./context/AuthContext";
import "./style.css";
import PrivateRoutes from "./utils/PrivateRoute";
export default function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/panel/:UUID" element={<PrivateRoutes />}>
          <Route path="/panel/:UUID/dashboard" element={<Dashboard />} />
          <Route path="/panel/:UUID/upload" element={<Upload />} />
          <Route path="/panel/:UUID/report" element={<Report />} />
          <Route path="/panel/:UUID/user" element={<User />} />
        </Route>
      </Routes>
      <Toaster position="top-center" />
    </AuthContext.Provider>
  );
}
