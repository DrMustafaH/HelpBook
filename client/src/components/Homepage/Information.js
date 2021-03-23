import React from "react";
import "./Information.scss";

// Information component
export default function Information() {
  return (
    <div className="information-section">
      <div className="information-heading">
        <h1>More Information</h1>
        <img alt="arrow" src="../images/arrow.png" className="team-img" />
      </div>
      <div className="information-content">
        <div>
          <h3>Front-end</h3>
          <div>
            <img
              alt="logo"
              src="https://icon-library.com/images/react-icon/react-icon-15.jpg"
            />
          </div>
        </div>
        <div>
          <h3>Back-end</h3>
          <div>
            <img alt="logo" src="../images/expressjs-icon.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
