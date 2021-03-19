import React from "react";
import "./Navbar.scss";
// import Login from "./Login/Login";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();

  function handleLoginClick() {
    history.push("/login");
  }
  function handleLogoutClick() {
    localStorage.clear();
    history.push("/");
  }
  function handleRegisterClick() {
    history.push("/register");
  }

  function handleHomeClick() {
    history.push("/");
  }

  return (
    <nav className="navbar">
      <div className="home-link">
        <a onClick={handleHomeClick}>
          <img className="logo-img" src="images/LogoHB.png"></img>
        </a>
        <h1 onClick={handleHomeClick}>HelpBook</h1>
      </div>
      <div className="login-signup">
        {!("token" in localStorage) && (
          <a className="login-signup-links" onClick={handleLoginClick}>
            LOGIN
          </a>
        )}
        {"token" in localStorage && (
          <a className="login-signup-links" onClick={handleLogoutClick}>
            LOGOUT
          </a>
        )}
        <a className="login-signup-links" onClick={handleRegisterClick}>
          REGISTER
        </a>
      </div>
    </nav>
  );
}
