import React from "react";
import "../DonorProfile/Header.scss";

export default function Header(props) {
  return (
    <div className="profile-header">
      <img alt="avatar" src={props.avatar}></img>
      <h1 className="profile-greeting">{props.username}'s Profile</h1>
    </div>
  );
}
