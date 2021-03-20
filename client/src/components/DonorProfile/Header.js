import React from "react";
import "./Header.scss";

// Header component
export default function Header(props) {
  return (
    <div className="profile-header">
      <img alt="avatar" src={props.avatar}></img>
      <h1 className="profile-greeting">Hi there, {props.username}</h1>
    </div>
  );
}
