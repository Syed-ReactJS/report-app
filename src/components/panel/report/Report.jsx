import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { privateRequest } from "../../../config/axios";
import DashboardLayout from "../../layout/DashboardLayout";
import "./Report.css";
const Report = () => {
  const [list, setList] = useState();
  const getReportList = async () => {
    try {
      const res = await privateRequest.get("get-reports");
      setList(res?.data?.data);
    } catch (error) {
      toast.error("Some error occurred");
    }
  };
  useEffect(() => {
    getReportList();
  }, []);
  const openReport = (file) => {
    window.open(
      `https://rtpcrreport-dcmc.onrender.com/upload/report/${file}`,
      "_blank"
    );
  };
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
          {list?.map((el, i) => {
            return (
              <div className="row" key={i}>
                <span>{el?.id}</span>
                <span>{el?.name}</span>
                <span>{el?.amount}</span>
                <i
                  className="fa fa-eye fa-lg"
                  onClick={() => openReport(el?.file)}
                ></i>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Report;
