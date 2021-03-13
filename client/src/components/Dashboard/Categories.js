import React from "react";
import "./Categories.scss";
import { Paper, withStyles } from "@material-ui/core";
import shadows from "@material-ui/core/styles/shadows";

const StyledPaper = withStyles({
  root: {
    background: "#0E212F",
    height: 100,
    width: 150,
    margin: "50px 10px 10px 10px",
    color: "#f0efec",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Hind Madurai', sans-serif",
    fontWeight: "700",
    fontSize: "1.15rem",
    borderRadius: 22,
    "&:hover": {
      background: "#3891A6",
      transition: "background 0.5s ease-in-out",
      cursor: "pointer",
      boxShadow: "10",
    },
  },
})(Paper);

export default function Categories() {
  return (
    <div className="categories-section">
      <div className="first-four">
        <StyledPaper>Health</StyledPaper>
        <StyledPaper>Food Banks</StyledPaper>
        <StyledPaper>Immigration & Refugees</StyledPaper>
        <StyledPaper>Education</StyledPaper>
      </div>
      <div className="second-four">
        <StyledPaper>Animals</StyledPaper>
        <StyledPaper>Kids</StyledPaper>
        <StyledPaper>Women</StyledPaper>
        <StyledPaper>Others</StyledPaper>
      </div>
    </div>
  );
}
