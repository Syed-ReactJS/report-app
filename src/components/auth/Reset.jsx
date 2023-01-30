import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { authRequest } from "../../config/axios";
import AuthLayout from "../layout/AuthLayout";

const Reset = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [loader, setLoader] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (data?.password !== data?.confirmPassword) {
        return toast.error("password and confirm password does not matched");
      }
      const path = window.location.href;
      const token = path.split("token=")?.[1];
      setLoader(true);
      const res = await authRequest.post("reset-password", {
        password: data?.password,
        token,
      });
      if (res?.data?.success) {
        toast.success(res?.data?.msg);
        navigate("/");
      } else toast.error(res?.data?.msg);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      toast.error(error);
      console.log("error", error);
    }
  };
  return (
    <AuthLayout>
      <div className="container">
        <div className="form-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Reset Password</h2>
            <div className="input-container">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input-container">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Enter confirm password"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
            {loader ? (
              <button type="submit" disabled>
                Loading...
              </button>
            ) : (
              <button type="submit">Login</button>
            )}
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};
export default Reset;
