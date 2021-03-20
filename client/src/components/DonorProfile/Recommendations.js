import React from "react";
import { Paper, withStyles } from "@material-ui/core";
import "./Recommendations.scss";

// withstyles method to style the Paper MUI react componect and assign a new name to it (StyledPaper)
const StyledPaper = withStyles({
  root: {
    height: 300,
    width: "100%",
    color: "#0E212F",
    display: "flex",
    fontFamily: "'Trirong', serif",
    fontWeight: "700",
    fontSize: "1.3rem",
    borderRadius: 22,
    border: "4px solid #f0efec",
    maxHeight: 300,
    overflow: "auto",
    textDecorationLine: "underline",
  },
})(Paper);

// Recommendation section
export default function Recommendations() {
  return (
    <div className="recommendations-section">
      <StyledPaper>
        <p className="recommendations-heading">News Log</p>
      </StyledPaper>
    </div>
  );
}
