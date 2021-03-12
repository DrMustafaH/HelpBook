import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img
        alt="logo"
        src="https://i.pinimg.com/originals/a5/e0/2a/a5e02a5a141f2a2a7b588edf7b467f45.jpg"
      />
      <ul>
        <li>SIGN IN</li>
        <li>SIGN UP</li>
      </ul>
    </nav>
  );
}