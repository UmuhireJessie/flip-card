import { useState } from "react";
import UserNavbar from "../../Navbar/Navbar";
import "./Register.css";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { registerUser } from "../../module/actions/UserAction";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
    const [isLastName, setLastName] = useState("");
    const [isFirstName, setFirstName] = useState("");
    const [isEmail, setEmail] = useState("");
    const [isPassword, setPassword] = useState("");
    const [error, setError] = useState({});
    const redirect = useNavigate();

    const FormValidation = () => {
        if (isLastName == "") {
            setError({ question: "Last name is required" });
            return true;
        }
        if (isFirstName == "") {
            setError({ answer: "First name is required" });
            return true;
        }
        if (isEmail == "") {
            setError({ answer: "Email is required" });
            return true;
        }
        if (isPassword == "") {
            setError({ answer: "Password is required" });
            return true;
        }
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (!FormValidation()) {
            const data = {
                name: isFirstName + " " + isLastName,
                email: isEmail,
                password: isPassword
            };
            props.registerUser(data);
            redirect("/login");
        } else {
            toast.error("All fields are required");
        }
    };

    return (
        <div>
            <div>
                <UserNavbar />
                <div>
                    <form className="register-form shadow-dark" onSubmit={(e) => HandleSubmit(e)}>
                        <h3 className="register-title">Sign up</h3>

                        <p className="heading-input">First Name</p>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="First name" 
                                value={isFirstName}
                                onChange={(e) => setFirstName(e.target.value)}/>
                        </div>

                        <p className="heading-input">Last Name</p>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Last name" 
                                value={isLastName} 
                                onChange={(e) => setLastName(e.target.value)} 
                            />
                        </div>

                        <p className="heading-input">Email</p>
                        <div className="form-group">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Enter email" 
                                value={isEmail}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <p className="heading-input">Password</p>
                        <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Enter password" 
                                value={isPassword}
                                onChange={(e) => setPassword(e.target.value)}/>
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

export default connect(null, {
    registerUser: registerUser,
}) (Register);
