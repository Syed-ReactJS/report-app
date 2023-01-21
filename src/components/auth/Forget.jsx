import AuthLayout from '../layout/AuthLayout';

const Forget = () => {
  return (
    <AuthLayout>
      <div className="container">
        <div className="form-container">
          <form>
            <h2>Forget Password</h2>
            <div className="input-container">
              <i className="fa fa-envelope"></i>
              <input type="email" placeholder="Enter email address" />
            </div>
            <button type="submit">Forget</button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
};
export default Forget;
