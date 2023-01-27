import React from "react";
import DashboardLayout from "../../layout/DashboardLayout";
import "./Report.css";
const Report = () => {
  return (
    <DashboardLayout>
      <div className="list-container">
        <div className="table-list">
          <table>
            <th>#</th>
            <th>Name</th>
            <tr>
              <td>1</td>
              <td>User-1</td>
            </tr>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Report;
