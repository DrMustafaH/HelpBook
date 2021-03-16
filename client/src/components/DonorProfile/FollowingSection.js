import React from "react";
import FollowingItem from "./FollowingItem";
import "./FollowingSection.scss";
import { Paper, withStyles } from "@material-ui/core";

const StyledPaper = withStyles({
  root: {
    background: "#f0efec",
    height: 400,
    width: "100%",
    margin: "50px 10px 10px 10px",
    color: "#0E212F",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Trirong', serif",
    fontWeight: "700",
    fontSize: "2.5rem",
    borderRadius: 0,
    maxHeight: 500,
    overflow: "auto",
  },
})(Paper);

export default function FollowingSection() {
  return (
    <div className="following-section">
      <StyledPaper>
        <div>Following</div>
        <div className="list-display">
          <FollowingItem />
          <FollowingItem />
          <FollowingItem />
          <FollowingItem />
        </div>
      </StyledPaper>
    </div>
  );
}
