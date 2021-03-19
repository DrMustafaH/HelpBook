import React from "react";
import "./LandingSection.scss";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function LandingSection() {
  const history = useHistory();

  function handleClick() {
    history.push("/dashboard");
  }

  return (
    <div className="landing-section">
      <div className="landing-msg">
        {/* <img className="hand-img" src="images/hand.png"></img> */}
        <img
          className="make-a-difference"
          src="images/Make-a-difference.png"
        ></img>
      </div>
      {/* <div className="landing-msg">
        <p className="landing-msg-helpbook">HelpBook</p>
        <p>MAKE A DIFFERENCE</p>
      </div> */}
      <div>
        <Button variant="contained">I Need Help</Button>
        <Button variant="contained" onClick={handleClick}>
          I Want To Help
        </Button>
      </div>
    </div>
  );
}
