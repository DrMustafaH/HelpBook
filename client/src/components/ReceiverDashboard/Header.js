import React from "react";
import "../DonorProfile/Header.scss";

// Header component
export default function Header(props) {
  return (
    <div>
      <div className="profile-header">
        <img alt="avatar" src={props.avatar}></img>
        <h1 className="profile-greeting">{props.username}'s Profile</h1>
      </div>
      <div className="profile-description">
        <p>
          Disrupt inspire and think tank, social entrepreneur but preliminary
          thinking think tank compelling. Inspiring, invest synergy capacity
          building, white paper; silo, unprecedented challenge B-corp
          problem-solvers. Preliminary thinking, indicators entrepreneur, mass
          incarceration; grit we must stand up agile policymaker
          citizen-centered.
        </p>
        <div className="receiver-read-more">
          <a className="receiver-link-more">Visit Website</a>
          <img alt="arrow" src="../images/arrow.png" className="news-arrow" />
        </div>
      </div>
    </div>
  );
}
