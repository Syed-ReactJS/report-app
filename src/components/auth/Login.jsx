import AuthLayout from '../layout/AuthLayout';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <AuthLayout>
      <div className="container">
        <div className="form-container">
          <form>
            <h2>Login</h2>
            <div className="input-container">
              <i className="fa fa-envelope"></i>
              <input type="email" placeholder="Enter email address" />
            </div>
            <div className="input-container">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Enter password" />
            </div>
            <button type="submit">Log In</button>
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
