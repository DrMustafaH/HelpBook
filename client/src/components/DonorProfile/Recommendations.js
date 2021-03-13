import React from "react";
import "./Recommendations.scss";
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
    padding: "10px",
  },
})(Paper);

export default function Header() {
  return (
    <div className="recommendations-box">
      <StyledPaper>
        <h1 className="recommendations-header">Recommendations</h1>
      </StyledPaper>
    </div>
  );
}
