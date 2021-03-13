import React from "react";
import "./Donations.scss";
import { Paper, withStyles } from "@material-ui/core";
import DonationItem from "./DonationItem";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const StyledPaper = withStyles({
  root: {
    background: "#f0efec",
    height: 500,
    width: "100%",
    margin: "50px 0 10px 10px",
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

const StyledIconArrow = withStyles({
  root: {
    color: "#0E212F",
    fontSize: "30px",
  },
})(ArrowRightIcon);

export default function Donations() {
  return (
    <div className="donations-section">
      <StyledPaper>
        <div className="donation-items-list">
          <p className="donations-title">Donations</p>
          <div>
            <DonationItem />
            <DonationItem />
          </div>
        </div>
      </StyledPaper>
    </div>
  );
}
