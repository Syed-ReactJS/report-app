import { useState } from "react";
import { toast } from "react-hot-toast";
import { authRequest } from "../../config/axios";
import AuthLayout from "../layout/AuthLayout";

const Forget = () => {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoader(true);
      const res = await authRequest.post("forget-password", { email });
      if (res?.data?.success) {
        toast.success(res?.data?.msg);
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
            <h2>Forget Password</h2>
            <div className="input-container">
              <i className="fa fa-envelope"></i>
              <input
                type="email"
                placeholder="Enter email address"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {loader ? (
              <button type="submit" disabled>
                Loading...
              </button>
            ) : (
              <button type="submit">Reset</button>
            )}
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};
export default Forget;
