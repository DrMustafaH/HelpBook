import React from "react";
import { List, makeStyles, Paper, withStyles } from "@material-ui/core";
import ActivityFeedItem from "./ActivityFeedItem";
import "./ActivityFeed.scss";

// withstyles method to style the Paper MUI react componect and assign a new name to it (StyledPaper)
const StyledPaper = withStyles({
  root: {
    background: "#f0efec",
    height: 400,
    width: "100%",
    color: "#0E212F",
    display: "flex",
    flexDirection: "column",
    fontFamily: "adobe-caslon-pro, serif",
    maxHeight: 500,

    "&.MuiPaper-elevation1": {
      boxShadow: "none",
    },
  },
})(Paper);

// makestyles method to style the whole Activity feed
const useStyles = makeStyles(() => ({
  root: {
    width: "auto",
  },
}));

// ActivityFeed component
export default function ActivityFeed(props) {
  const classes = useStyles();
  // map all money donations made to show on activity feed
  const mappedMoneyLog = props.moneyLog.map((moneyItem) => {
    return (
      <ActivityFeedItem
        key={moneyItem.id}
        name={moneyItem.receiver_name}
        amount={moneyItem.donated_amount}
      />
    );
  });
  // map all donation items made to show on activity feed
  const mappedItemLog = props.itemLog.map((item) => {
    return (
      <ActivityFeedItem
        key={item.id}
        receiver_name={item.item_receiver}
        item={item.item_name}
      />
    );
  });

  return (
    <div className="activity-feed-section">
      <StyledPaper>
        <div className="activity-header">
          <h1>Activity Feed</h1>
          {/* <img className="arrow-icon-header" src="../images/arrow.png"></img> */}
        </div>
        <div className="donated-items-list">
          <List className={classes.root}>{mappedMoneyLog}</List>
          <List className={classes.root}>{mappedItemLog}</List>
        </div>
      </StyledPaper>
    </div>
  );
}
