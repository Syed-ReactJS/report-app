import DashboardLayout from "../../layout/DashboardLayout";
import "./User.css";
const User = () => {
  return (
    <DashboardLayout>
      <div className="list-container">
        <div className="table-list">
          <div className="row">
            <p>Id</p>
            <p>Name</p>
            <p>Price</p>
            <p>View</p>
          </div>
          <div className="row">
            <span>Id</span>
            <span>Name</span>
            <span>spanrice</span>
            <i className="fa fa-eye fa-lg"></i>
          </div>
          <div className="row">
            <span>Id</span>
            <span>Name</span>
            <span>spanrice</span>
            <i className="fa fa-eye fa-lg"></i>
          </div>
          <div className="row">
            <span>Id</span>
            <span>Name</span>
            <span>spanrice</span>
            <span>
              <i className="fa fa-eye fa-lg"></i>
            </span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default User;
