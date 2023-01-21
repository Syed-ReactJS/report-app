import AuthLayout from '../layout/AuthLayout';

const Reset = () => {
  return (
    <AuthLayout>
      <div className="container">
        <div className="form-container">
          <form>
            <h2>Reset Password</h2>
            <div className="input-container">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Enter password" />
            </div>
            <div className="input-container">
              <i className="fa fa-lock"></i>
              <input type="password" placeholder="Enter confirm password" />
            </div>
            <button type="submit">Reset</button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};
export default Reset;
