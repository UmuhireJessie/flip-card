import UserNavbar from "../../Navbar/Navbar";
import "./Register.css";

const Register = () => {
    return (
        <div>
            <div>
                <UserNavbar />
                <div>
                    <form className="register-form shadow-dark">
                        <h3 className="register-title">Sign up</h3>

                        <p className="heading-input">First Name</p>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>

                        <p className="heading-input">Last Name</p>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>

                        <p className="heading-input">Email</p>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <p className="heading-input">Password</p>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="log">Signup</button>
                        <p className="signup-option">Already have an account? <a
                            href="./login">Login</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
