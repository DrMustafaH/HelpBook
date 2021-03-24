import React from "react";
import "./AboutUs.scss";

// AboutUs component
export default function AboutUs() {
  return (
    <div className="about-us-section">
      <div className="about-us-heading">
        <h1>About Us</h1>
        <img alt="arrow" src="../images/arrow.png" className="team-img" />
      </div>
      <div className="about-us-content">
        <div>
          <div className="team-members">
            <img
              alt="team-member"
              src="../images/Mustafa.jpg"
              className="team-img"
            />
            <div className="team-name">Mustafa</div>
          </div>
          <p>Full-Stack Webdeveloper with a health background.</p>
        </div>
        <div>
          <div className="team-members">
            <img
              alt="team-member"
              src="../images/Maria.png"
              className="team-img"
            />
            <div className="team-name">Maria</div>
          </div>
          <p>Full-Stack Webdeveloper with a hospitality background.</p>
        </div>
      </div>
    </div>
  );
}
