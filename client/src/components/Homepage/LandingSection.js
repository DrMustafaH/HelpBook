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
      <img
        alt="logo"
        src="https://i.pinimg.com/originals/a5/e0/2a/a5e02a5a141f2a2a7b588edf7b467f45.jpg"
      />
      <div className="landing-msg">
        <p className="landing-msg-helpbook">HelpBook</p>
        <p>MAKE A DIFFERENCE</p>
      </div>
      <div>
        <Button variant="contained">I Need Help</Button>
        <Button variant="contained" onClick={handleClick}>
          I Want To Help
        </Button>
      </div>
    </div>
  );
}
