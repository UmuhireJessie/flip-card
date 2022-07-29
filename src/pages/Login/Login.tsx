import UserNavbar from "../../Navbar/Navbar";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div>
        <UserNavbar />
        <div>
          <form className="login-form shadow-dark">
            <h3 className="login-title">Login</h3>
            <p className="heading-input">Email</p>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <p className="heading-input">Password</p>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="log">
              Login
            </button>
            <p className="signup-option">
              Don't have an account? <a href="./register">Sign up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
