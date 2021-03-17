import React from "react";
import "./Navbar.scss";
// import Login from "./Login/Login";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();

  function handleLoginClick() {
    history.push("/login");
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
        <a className="login-signup-links" onClick={handleLoginClick}>
          LOGIN
        </a>
        <a className="login-signup-links">SIGN UP</a>
      </div>
    </nav>
  );
}
