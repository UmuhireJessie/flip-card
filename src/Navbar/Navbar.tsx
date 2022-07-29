// import phantom from "../../assets/images/logos/phantomIcon.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
function UserNavbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="navBar">
        <nav className="nav">
          <div className="logo">
            {/* <img alt="" src="" width="120px" height="65px" /> */}
            <h2 className="logoTitle"><span>C</span>ards</h2>
          </div>
          <div className={toggleMenu ? "navItem active" : "navItem"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/cards">View Cards</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login" className="login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
          {toggleMenu ? (
            <ImCross
              className="close"
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            />
          ) : (
            <GiHamburgerMenu
              className="hamburger"
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            />
          )}
        </nav>
      </div>
    </>
  );
}

export default UserNavbar;
