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
      <img
        alt="logo"
        src="https://i.pinimg.com/originals/a5/e0/2a/a5e02a5a141f2a2a7b588edf7b467f45.jpg"
      />
      <div className="landing-msg">
        <p className="landing-msg-helpbook">HelpBook</p>
        <p>MAKE A DIFFERENCE</p>
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
