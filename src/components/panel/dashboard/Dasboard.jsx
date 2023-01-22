import DashboardLayout from "../../layout/DasboardLayout";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="dashboard-container">
        <div className="panel-header">
          <i class="fa fa-home"></i>
          <h3>Dashboard</h3>
        </div>
        <div className="row">
          <div className="card">
            <h3>Weekly Sale</h3>
            <h1>$ 15,000</h1>
            <p>Increased by 60%</p>
          </div>
          <div className="card">
            <h3>Weekly Sale</h3>
            <h1>$ 15,000</h1>
            <p>Increased by 60%</p>
          </div>
          <div className="card">
            <h3>Weekly Sale</h3>
            <h1>$ 15,000</h1>
            <p>Increased by 60%</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
