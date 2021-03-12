import React from "react";
import { Button } from "@material-ui/core";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img
        alt="logo"
        src="https://i.pinimg.com/originals/a5/e0/2a/a5e02a5a141f2a2a7b588edf7b467f45.jpg"
      />
      <ul>
        <li>About Us</li>
        <li>How to Help</li>
        <li>Information</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}