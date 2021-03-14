import React from "react";
import "./Header.scss";

export default function Header({ name, avatar }) {
  return (
    <div className="profile-header">
      <img alt="profile-picture" src={avatar}></img>
      <h1 className="profile-greeting">Hi there, {name}</h1>
    </div>
  );
}
