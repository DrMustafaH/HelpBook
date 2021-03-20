import React from "react";
import { Paper, withStyles } from "@material-ui/core";
import "./Recommendations.scss";

// withstyles method to style the Paper MUI react component and assign a new name to it (StyledPaper)
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

// Recommendation section
export default function Recommendations() {
  return (
    <div className="recommendations-section">
      <StyledPaper>
        <h1 className="recommendations-heading">Recommendations</h1>
      </StyledPaper>
    </div>
  );
}
