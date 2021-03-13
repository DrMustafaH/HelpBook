import React from "react";
// import "./Header.scss";
import { Paper, withStyles } from "@material-ui/core";

const StyledPaper = withStyles({
  root: {
    height: "150px",
    margin: "50px 10px 10px 10px",
    color: "#0E212F",
    textAlign: "left",
    fontFamily: "'Hind Madurai', sans-serif",
    borderRadius: 10,
    margin: "20px 100px",
    padding: "20px",
  },
})(Paper);

export default function Header() {
  return (
    <div className="recommendations-box">
      <StyledPaper>
        <h1>Recommendations</h1>
      </StyledPaper>
    </div>
  );
}
