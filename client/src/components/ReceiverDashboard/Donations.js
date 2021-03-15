import React from "react";
import "./Donations.scss";
import { List, Paper, withStyles, makeStyles } from "@material-ui/core";
import DonationItem from "./DonationItem";

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
    // fontSize: "2.5rem",
    borderRadius: 0,
    maxHeight: 500,
    overflow: "auto",
  },
})(Paper);

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

export default function Donations(props) {
  const classes = useStyles();
  console.log("donation props", props);
  const mappedMoneyLog = props.donationLog.map((donationItem) => {
    return (
      <DonationItem
        key={donationItem.id}
        name={donationItem.donor_name}
        amount={donationItem.donated_amount}
      />
    );
  });

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
