import React from "react";
import { Paper, withStyles } from "@material-ui/core";
import "./TotalFollowers.scss";

const StyledPaper = withStyles({
  root: {
    background: "#0E212F",
    height: 100,
    width: 150,
    color: "#f0efec",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Hind Madurai', sans-serif",
    fontWeight: "700",
    borderRadius: 15,
  },
})(Paper);

export default function TotalFollowers() {
  return (
    <div className="total-followers-box">
      <StyledPaper>
        <div>
          <h1 className="total-followers">500</h1>
          <p>Followers</p>
        </div>
      </StyledPaper>
    </div>
  );
}
