import { useEffect } from "react";
import "../auth/Auth.css";
const AuthLayout = ({ children }) => {
  const handleTheme = () => {
    let isTheme = localStorage.getItem("theme") ?? "lite-mode";
    if (isTheme === "lite-mode") {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      isTheme = "dark-mode";
    } else {
      document.body.classList.add("lite-mode");
      document.body.classList.remove("dark-mode");
      isTheme = "lite-mode";
    }
    localStorage.setItem("theme", isTheme);
  };
  useEffect(() => {
    let isTheme = localStorage.getItem("theme");
    if (isTheme === "dark-mode") {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
  }, []);
  return (
    <div>
      <div className="theme-btn">
        <i className="fa fa-moon fa-2x" onClick={handleTheme}></i>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
