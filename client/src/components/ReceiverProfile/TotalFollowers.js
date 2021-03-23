import React, { Component } from "react";
import { Paper, withStyles } from "@material-ui/core";
import "./TotalFollowers.scss";

// withstyles method to style the Paper MUI react componect and assign a new name to it (StyledPaper)
const StyledPaper = withStyles({
  root: {
    background: "#0E212F",
    height: "150px",
    width: "200px",
    color: "#f0efec",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Hind Madurai', sans-serif",
    fontWeight: "700",
    borderRadius: 15,
  },
})(Paper);

// TotalFollowers component
export default function TotalFollowers(props) {
  return (
    <div className="total-followers-box">
      <StyledPaper>
        <div>
          <h1 className="total-followers">{props.count}</h1>
          <h2>Followers</h2>
        </div>
      </StyledPaper>
    </div>
  );
}
