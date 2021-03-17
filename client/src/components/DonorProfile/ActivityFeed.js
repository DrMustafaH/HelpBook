import React from "react";
import "./ActivityFeed.scss";
import ActivityFeedItem from "./ActivityFeedItem";
import { List, makeStyles, Paper, withStyles } from "@material-ui/core";

const StyledPaper = withStyles({
  root: {
    background: "#f0efec",
    height: 400,
    width: "100%",
    color: "#0E212F",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Trirong', serif",
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

export default function ActivityFeed(props) {
  const classes = useStyles();
  const mappedMoneyLog = props.moneyLog.map((moneyItem) => {
    return (
      <ActivityFeedItem
        key={moneyItem.id}
        name={moneyItem.receiver_name}
        amount={moneyItem.donated_amount}
      />
    );
  });

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
        <div className="donated-items-list">
          <h1 className="activity-feed-header">Activity Feed</h1>
          <List className={classes.root}>{mappedMoneyLog}</List>
          <List className={classes.root}>{mappedItemLog}</List>
        </div>
      </StyledPaper>
    </div>
  );
}
