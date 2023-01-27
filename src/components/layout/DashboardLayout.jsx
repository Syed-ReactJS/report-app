import { useEffect } from "react";
import "../panel/Panel.css";
import SideMenu from "../panel/shared/SideMenu";

const DashboardLayout = ({ children }) => {
  useEffect(() => {
    let isTheme = localStorage.getItem("theme");
    if (isTheme === "dark-mode") {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
  }, []);
  return (
    <div className="dashboard-layout">
      <div className="menu">
        <SideMenu />
      </div>
      <div className="layout">{children}</div>
    </div>
  );
};

export default DashboardLayout;
