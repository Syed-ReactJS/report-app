import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { authRequest } from "../../config/axios";
import AuthContext from "../../context/AuthContext";
import AuthLayout from "../layout/AuthLayout";
const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [data, setData] = useState({
    email: "",
    password: "",
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
      const res = await authRequest.post("login", data);
      if (res?.data?.success) {
        toast.success(res?.data?.msg);
        localStorage.setItem("auth-token", res?.data?.data?.token);
        localStorage.setItem("_id", res?.data?.data?.user?._id);
        setUser(res?.data?.data);
      } else toast.error(res?.data?.msg);
      setLoader(false);
      navigate(`panel/${res?.data?.data?.user?._id}/dashboard`);
    } catch (error) {
      setLoader(false);
      toast.error(error?.response?.data?.msg);
      console.log("error", error);
    }
  };
  return (
    <AuthLayout>
      <div className="container">
        <div className="form-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Login</h2>
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
              <i className="fa fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
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
            <div className="forget-password">
              <Link to="/signup">Signup</Link>
              <Link to="/forget">Forget password</Link>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};
export default Login;
