import { useState } from "react";
import { toast } from "react-hot-toast";
import { authRequest } from "../../config/axios";
import AuthLayout from "../layout/AuthLayout";

const Login = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
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
      setLoader(true);
      const res = await authRequest.post("signup", data);
      if (res?.data?.success) toast.success(res?.data?.msg);
      else toast.error(res?.data?.msg);
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
            <h2>Signup</h2>
            <div className="input-container">
              <i className="fa fa-user"></i>
              <input
                type="text"
                name="firstName"
                placeholder="Enter first name"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input-container">
              <i className="fa fa-user"></i>
              <input
                type="text"
                name="lastName"
                placeholder="Enter last name"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input-container">
              <i className="fa fa-envelope"></i>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="input-container">
              <i className="fa fa-user"></i>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
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
                onChange={(e) => handleChange(e)}
              />
            </div>
            {loader ? (
              <button type="submit" disabled>
                Loading...
              </button>
            ) : (
              <button type="submit">Signup</button>
            )}
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};
export default Login;
