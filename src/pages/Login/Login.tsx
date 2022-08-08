import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../module/actions/UserAction";
import UserNavbar from "../../Navbar/Navbar";
import "./Login.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = useNavigate();

  const handleSubmit = (e) => {
    if (email == "") {
      toast.error("Email is required")
    }
    if (password == "") {
      toast.error("Password is required")
    }

    const data = {
      email: email,
      password: password
    };

    props.loginUser(data)
    redirect("/dashboard");

  }
  return (
    <div>
      <div>
        <UserNavbar />
        <div>
          <form className="login-form shadow-dark" onSubmit={(e) => handleSubmit(e)}>
            <h3 className="login-title">Login</h3>
            <p className="heading-input">Email</p>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <p className="heading-input">Password</p>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

export default connect(null, {
  loginUser: loginUser,
}) (Login);
