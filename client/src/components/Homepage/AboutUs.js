import React from "react";
import "./AboutUs.scss";

export default function AboutUs() {
  return (
    <div>
      <h1 className="about-us-heading">About Us</h1>
      <div className="about-us-section">
        <div>
          <img
            alt="logo"
            src="https://i.pinimg.com/originals/a5/e0/2a/a5e02a5a141f2a2a7b588edf7b467f45.jpg"
          />
          <p>Some text</p>
        </div>
        <div>
          <img
            alt="logo"
            src="https://i.pinimg.com/originals/a5/e0/2a/a5e02a5a141f2a2a7b588edf7b467f45.jpg"
          />
          <p>Some text</p>
        </div>
      </div>
    </div>
  );
}
