import { ListItem, ListItemText, withStyles } from "@material-ui/core";
import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const StyledIconArrow = withStyles({
  root: {
    color: "#0E212F",
    fontSize: "30px",
  },
})(ArrowRightIcon);

export default function DonationItem(props) {
  return (
    <ListItem alignItems="flex-start">
      <StyledIconArrow />
      {!props.amount && (
        <ListItemText>
          {props.name} donated: {props.item}
        </ListItemText>
      )}
      {!props.item && (
        <ListItemText>
          {props.name} donated: ${props.amount}
        </ListItemText>
      )}
    </ListItem>
  );
}
