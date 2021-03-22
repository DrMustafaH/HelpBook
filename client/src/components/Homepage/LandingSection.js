import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./LandingSection.scss";

// LandingSection component
export default function LandingSection() {
  const history = useHistory();

  // Function to direct user to dashboard when "I Want To Help" button is clicked
  function handleClickWantToHelp() {
    history.push("/dashboard");
  }

  // Function to direct user to dashboard when "I Need Help" button is clicked
  function handleClickNeedHelp() {
    history.push("/Login");
  }

  return (
    <div className="landing-section">
      <div className="landing-msg">
        {/* <img className="hand-img" src="/images/guy-box.png"></img> */}
        <img
          className="make-a-difference"
          src="images/makeadifference.png"
        ></img>
      </div>
      <div>
        <Button variant="contained" onClick={handleClickNeedHelp}>
          I Need Help
        </Button>
        <Button variant="contained" onClick={handleClickWantToHelp}>
          I Want To Help
        </Button>
      </div>
    </div>
  );
}
