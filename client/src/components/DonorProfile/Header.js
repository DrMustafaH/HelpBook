import React from "react";
import "./Header.scss";

export default function Header(props) {
  return (
    <div className="profile-header">
      <img alt="avatar" src={props.avatar}></img>
      <h1 className="profile-greeting">Hi there, {props.username}</h1>
    </div>
  );
}
