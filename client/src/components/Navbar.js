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
      <a className="home-link" onClick={handleHomeClick}>
        <img
          alt="logo"
          src="https://i.pinimg.com/originals/a5/e0/2a/a5e02a5a141f2a2a7b588edf7b467f45.jpg"
        />
      </a>
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
