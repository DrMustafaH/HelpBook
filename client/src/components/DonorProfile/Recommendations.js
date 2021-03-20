import React from "react";
import "./Recommendations.scss";
import { Paper, withStyles } from "@material-ui/core";

const StyledPaper = withStyles({
  root: {
    width: "100%",
    color: "#0E212F",
    display: "flex",
    fontFamily: "'Trirong', serif",
    fontWeight: "700",
    maxHeight: 300,
    overflow: "auto",
  },
})(Paper);

export default function Header() {
  return (
    <div className="recommendations-section">
      <StyledPaper>
        <h1 className="recommendations-heading">Recommendations</h1>
      </StyledPaper>
    </div>
  );
}
