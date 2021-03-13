import React from "react";
import "./Helps.scss";
import { Paper, withStyles } from "@material-ui/core";
import HelpItem from "./HelpItem";

const StyledPaper = withStyles({
  root: {
    background: "#f0efec",
    height: 500,
    width: 450,
    margin: "50px 10px 10px 10px",
    color: "#0E212F",
    display: "flex",
    justifyContent: "center",
    fontFamily: "'Trirong', serif",
    fontWeight: "700",
    fontSize: "2.5rem",
    borderRadius: 0,
    maxHeight: 500,
    overflow: "auto",
  },
})(Paper);

export default function Helps() {
  return (
    <div className="helps-section">
      <StyledPaper>
        <div>
          Organizations
          <HelpItem />
          <HelpItem />
          <HelpItem />
          <HelpItem />
          <HelpItem />
          <HelpItem />
        </div>
      </StyledPaper>
      <StyledPaper>
        <div>
          Individuals
          <HelpItem />
          <HelpItem />
          <HelpItem />
          <HelpItem />
          <HelpItem />
          <HelpItem />
        </div>
      </StyledPaper>
    </div>
  );
}
