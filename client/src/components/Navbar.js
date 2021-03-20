import React from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.scss";

// Navbar component
export default function Navbar(props) {
  const history = useHistory();

  // function to route user to login page when login is clicked
  function handleLoginClick() {
    history.push("/login");
  }

  // function to route user to homepage when logout is clicked and token is cleared from localstorage
  function handleLogoutClick() {
    props.logout();

    history.push("/");
  }

  // function to route user to registration page when register is clicked
  function handleRegisterClick() {
    history.push("/register");
  }

  // function to route user to homepage when app logo clicked
  function handleHomeClick() {
    history.push("/");
  }

  return (
    <nav className="navbar">
      <div className="home-link" onClick={handleHomeClick}>
        <img alt="logo" className="logo-img" src="images/LogoHB.png"></img>
        <h1 onClick={handleHomeClick}>HelpBook</h1>
      </div>
      <div className="login-signup">
        {!props.isLoggedIn ? (
          <div className="login-signup-links" onClick={handleLoginClick}>
            LOGIN
          </div>
        ) : (
          <div className="login-signup-links" onClick={handleLogoutClick}>
            LOGOUT
          </div>
        )}
        <div className="login-signup-links" onClick={handleRegisterClick}>
          REGISTER
        </div>
      </div>
    </nav>
  );
}
