import React from "react";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
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

  // function to route user to homepage when app logo clicked
  function handleDashboardClick() {
    history.push("/dashboard");
  }

  // function to route user to homepage when app logo clicked
  function handleProfileClick() {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(props.isLoggedIn);
    console.log("DECODED", decoded);
    if (decoded.typeId === 1) {
      history.push(`/donor/${decoded.userId}`);
    } else {
      history.push(`/receiver/${decoded.userId}`);
    }
  }

  return (
    <nav className="navbar">
      <div className="home-link" onClick={handleHomeClick}>
        <img
          alt="logo"
          className="logo-img"
          src="../images/LogoHelpBook.png"
        ></img>
        <h1 onClick={handleHomeClick}>HelpBook</h1>
      </div>
      {props.isLoggedIn ? (
        <div className="nav-links">
          <div className="nav-links-text" onClick={handleDashboardClick}>
            DASHBOARD
          </div>
          <div className="nav-links-text" onClick={handleProfileClick}>
            MY PROFILE
          </div>
        </div>
      ) : null}
      <div className="nav-links">
        {!props.isLoggedIn ? (
          <div className="nav-links-text" onClick={handleLoginClick}>
            SIGN IN
          </div>
        ) : (
          <div className="nav-links-text" onClick={handleLogoutClick}>
            SIGN OUT
          </div>
        )}
        {!props.isLoggedIn ? (
          <div className="nav-links-text" onClick={handleRegisterClick}>
            SIGN UP
          </div>
        ) : null}
      </div>
    </nav>
  );
}
