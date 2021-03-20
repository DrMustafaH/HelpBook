import React from "react";
import { ListItem, ListItemText, withStyles } from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

// withstyles method to style the ArrowRightIcon MUI react componect and assign a new name to it (StyledIconArrow)
const StyledIconArrow = withStyles({
  root: {
    color: "#0E212F",
    fontSize: "30px",
  },
})(ArrowRightIcon);

// ActivityFeedItem component
export default function ActivityFeedItem(props) {
  return (
    <ListItem alignItems="flex-start">
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
