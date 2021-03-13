import React from "react";
import "./NewsLog.scss";
import { Paper, withStyles } from "@material-ui/core";

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

export default function NewsLog() {
  return (
    <div className="newslog-section">
      <StyledPaper>
        <p className="newslog-heading">News Log</p>
      </StyledPaper>
    </div>
  );
}
