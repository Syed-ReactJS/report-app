import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { privateRequest } from "../../../config/axios";
import DashboardLayout from "../../layout/DashboardLayout";
import "./User.css";
const User = () => {
  const [list, setList] = useState();
  const getReportList = async () => {
    try {
      const res = await privateRequest.get("get-users");
      setList(res?.data?.data);
    } catch (error) {
      toast.error("Some error occurred");
    }
  };
  useEffect(() => {
    getReportList();
  }, []);
  return (
    <DashboardLayout>
      <div className="list-container">
        <div className="table-list">
          <div className="row">
            <p>firstName</p>
            <p>lastName</p>
            <p>Username</p>
            <p>Email</p>
          </div>
          {list?.map((el, i) => {
            return (
              <div className="row" key={i}>
                <span>{el?.firstName}</span>
                <span>{el?.lastName}</span>
                <span>{el?.username}</span>
                <span>{el?.email}</span>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default User;
