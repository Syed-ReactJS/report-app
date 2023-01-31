import { useState } from "react";
import { toast } from "react-hot-toast";
import { privateRequest } from "../../../config/axios";
import DashboardLayout from "../../layout/DashboardLayout";
import "./upload.css";
const Upload = () => {
  const [data, setData] = useState({
    id: "",
    name: "",
    amount: "",
    file: "",
  });
  const [loader, setLoader] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoader(true);
      const formData = new FormData();
      formData.append("id", data?.id);
      formData.append("name", data?.name);
      formData.append("amount", data?.amount);
      formData.append("file", data?.file);

      const res = await privateRequest.post("create-report", formData);
      if (res?.data?.success) {
        toast.success("Data successfully saved");
        setData({ id: "", name: "", amount: "", file: "" });
      } else toast.error(res?.data?.msg);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      toast.error(error?.response?.data?.msg);
      console.log("error", error);
    }
  };
  console.log("data", data);

  return (
    <DashboardLayout>
      <div className="upload-container">
        <div className="container">
          <div className="form-container">
            <form onSubmit={(e) => handleSubmit(e)}>
              <h2>Upload</h2>
              <div className="input-container">
                <i className="fa fa-hashtag"></i>
                <input
                  type="text"
                  name="id"
                  placeholder="Enter last 4 digit"
                  required
                  value={data?.id}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="input-container">
                <i className="fa fa-user"></i>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  required
                  value={data?.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="input-container">
                <i className="fa fa-dollar"></i>
                <input
                  type="text"
                  name="amount"
                  placeholder="Enter amount"
                  required
                  value={data?.amount}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="input-container">
                <i className="fa fa-file"></i>
                <input
                  type="file"
                  placeholder="Upload report"
                  required
                  onChange={(e) =>
                    setData({ ...data, file: e.target.files[0] })
                  }
                />
              </div>
              {loader ? (
                <button type="submit" disabled>
                  Loading...
                </button>
              ) : (
                <button type="submit">Submit</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Upload;
