import React from "react";
import { List, Paper, withStyles, makeStyles } from "@material-ui/core";
import DonationItem from "./DonationItem";
import "./Donations.scss";

// withstyles method to style the Paper MUI react componect and assign a new name to it (StyledPaper)
const StyledPaper = withStyles({
  root: {
    background: "#f0efec",
    height: 500,
    width: "100%",
    margin: "0 0 10px 10px",
    color: "#0E212F",
    display: "flex",
    justifyContent: "center",
    fontFamily: "'Trirong', serif",
    fontWeight: "700",
    borderRadius: 0,
    maxHeight: 500,
    overflow: "auto",
  },
})(Paper);

// makestyles method to style the whole Donations section
const useStyles = makeStyles(() => ({
  root: {
    width: "auto",
    backgroundColor: "#f0efec",
    borderRadius: 22,
    position: "center",
    padding: 0,
    marginLeft: 10,
    marginTop: 0,
  },
}));

// Donations component
export default function Donations(props) {
  const classes = useStyles();
  // map all money donations made to show on Donations section
  const mappedMoneyLog = props.donationLog.map((donationAmount) => {
    return (
      <DonationItem
        key={donationAmount.id}
        name={donationAmount.donor_name}
        amount={donationAmount.donated_amount}
      />
    );
  });

  // map all item donations made to show on Donations section
  const mappedItemLog = props.itemLog.map((item) => {
    return (
      <DonationItem
        key={item.id}
        name={item.item_donor_name}
        item={item.item_name}
      />
    );
  });

  return (
    <div className="donations-section">
      <StyledPaper>
        <div className="donation-items-list">
          <h3 className="donations-title">Donations</h3>
          <List className={classes.root}>{mappedMoneyLog}</List>
          <List className={classes.root}>{mappedItemLog}</List>
        </div>
      </StyledPaper>
    </div>
  );
}
