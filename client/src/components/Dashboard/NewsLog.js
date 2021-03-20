import React from "react";
import { Paper, withStyles } from "@material-ui/core";
import "./NewsLog.scss";

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

export default function NewsLog() {
  return (
    <div className="newslog-section">
      <StyledPaper>
        <h1 className="newslog-heading">News Log</h1>
      </StyledPaper>
    </div>
  );
}
