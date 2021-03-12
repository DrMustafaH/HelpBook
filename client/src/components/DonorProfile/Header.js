import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="profile-header">
      <img
        alt="profile-picture"
        src="https://robohash.org/autminimadolor.bmp?&set=set1"
      ></img>
      <h1 className="profile-greeting">Hi there, username</h1>
    </div>
  );
}
