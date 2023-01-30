import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = localStorage.getItem("auth-token");
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
