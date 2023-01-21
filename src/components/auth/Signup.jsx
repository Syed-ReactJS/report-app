import AuthLayout from '../layout/AuthLayout';

const Login = () => {
  return (
    <AuthLayout>
      <div className="container">
        <div className="form-container">
          <form>
            <h2>Signup</h2>
            <div className="input-container">
              <i className="fa fa-user"></i>
              <input type="text" placeholder="Enter first name" />
            </div>
            <div className="input-container">
              <i className="fa fa-user"></i>
              <input type="text" placeholder="Enter last name" />
            </div>
            <div className="input-container">
              <i className="fa fa-envelope"></i>
              <input type="text" placeholder="Enter email address" />
            </div>
            <div className="input-container">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Enter password" />
            </div>
            <div className="input-container">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Enter confirm password" />
            </div>
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};
export default Login;
