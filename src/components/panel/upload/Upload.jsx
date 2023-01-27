import DashboardLayout from "../../layout/DashboardLayout";
import "./upload.css";
const Upload = () => {
  return (
    <DashboardLayout>
      <div className="upload-container">
        <div className="container">
          <div className="form-container">
            <form>
              <h2>Upload</h2>
              <div className="input-container">
                <i className="fa fa-user"></i>
                <input type="text" placeholder="Enter Name" />
              </div>
              <div className="input-container">
                <i className="fa fa-hashtag"></i>
                <input type="text" placeholder="Enter last 4 digit" />
              </div>
              <div className="input-container">
                <i className="fa fa-dollar"></i>
                <input type="text" placeholder="Enter amount" />
              </div>
              <div className="input-container">
                <i className="fa fa-file"></i>
                <input type="file" placeholder="Upload report" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Upload;
