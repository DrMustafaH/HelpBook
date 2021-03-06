import React from "react";
import "./Footer.scss";

// Footer component
export default function Footer() {
  return (
    <div className="footer-section">
      <div>
        <i className="fa fa-facebook-official" aria-hidden="true"></i>
        <i className="fa fa-twitter-square" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <i className="fa fa-map-marker" aria-hidden="true"></i>
        <i className="fa fa-phone-square" aria-hidden="true"></i>
        <i className="fa fa-envelope" aria-hidden="true"></i>
      </div>
      <p className="copyrights">
        Copyright © 2021 HelpBook Inc. All rights reserved.
      </p>
    </div>
  );
}
