import React from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.scss";

// Navbar component
export default function Navbar() {
  const history = useHistory();

  // function to route user to login page when login is clicked
  function handleLoginClick() {
    history.push("/login");
  }

  // function to route user to homepage when logout is clicked and token is cleared from localstorage
  function handleLogoutClick() {
    localStorage.clear();
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
        <img
          alt="logo"
          src="https://i.pinimg.com/originals/a5/e0/2a/a5e02a5a141f2a2a7b588edf7b467f45.jpg"
        />
      </div>
      <div className="login-signup">
        {!("token" in localStorage) && (
          <div className="login-signup-links" onClick={handleLoginClick}>
            LOGIN
          </div>
        )}
        {"token" in localStorage && (
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
