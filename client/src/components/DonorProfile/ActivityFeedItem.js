import { ListItem, ListItemText, withStyles } from "@material-ui/core";
import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const StyledIconArrow = withStyles({
  root: {
    color: "#0E212F",
    fontSize: "30px",
  },
})(ArrowRightIcon);

export default function ActivityFeedItem(props) {
  return (
    <ListItem>
      <StyledIconArrow />
      {!props.item && (
        <ListItemText>
          You donated: ${props.amount} to {props.name}.
        </ListItemText>
      )}
      {!props.amount && (
        <ListItemText>
          You donated: {props.item} to {props.receiver_name}.
        </ListItemText>
      )}
    </ListItem>
  );
}
