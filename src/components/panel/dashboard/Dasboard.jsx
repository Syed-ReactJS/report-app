import DashboardLayout from "../../layout/DashboardLayout";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="dashboard-container">
        {/* <div className="panel-header">
          <i class="fa-solid fa-bars"></i>
          <h3>Dashboard</h3>
        </div> */}
        <div className="row">
          <div className="card">
            <h3>All Report</h3>
            <h1>4</h1>
          </div>
          <div className="card">
            <h3>Total Revenue</h3>
            <h1>$ 15,000</h1>
          </div>
          <div className="card">
            <h3>All User </h3>
            <h1>1</h1>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
