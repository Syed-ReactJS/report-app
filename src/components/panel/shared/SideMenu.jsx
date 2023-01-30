import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";

const SideMenu = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="menu-container">
      <div className="menu-logo">
        <i class="fa fa-book-dead"></i>
        <p>Report App</p>
      </div>
      <div className="menu-list">
        <NavLink to={`/panel/${user?.user?._id}/dashboard`}>
          <div className="list">
            <i class="fa fa-home"></i>
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink to={`/panel/${user?.user?._id}/upload`}>
          <div className="list">
            <i class="fa fa-arrow-up-from-bracket"></i>
            <p>upload</p>
          </div>
        </NavLink>
        <NavLink to={`/panel/${user?.user?._id}/report`}>
          <div className="list">
            <i class="fa fa-file"></i>
            <p>Report</p>
          </div>
        </NavLink>
        <NavLink to={`/panel/${user?.user?._id}/user`}>
          <div className="list">
            <i class="fa fa-user"></i>
            <p>Users</p>
          </div>
        </NavLink>
        <hr />
        <div className="list">
          <i class="fa fa-power-off"></i>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
