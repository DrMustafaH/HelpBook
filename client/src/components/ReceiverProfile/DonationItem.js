import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    width: "auto",
    backgroundColor: "#f0efec",
    borderRadius: 22,
    position: "center",
    padding: 0,
    marginLeft: 10,
    marginTop: 0,
    "&:hover": {
      backgroundColor: "#dbd6c5",
    },
  },
  inline: {
    display: "inline",
  },
}));

export default function DonationItem() {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemText primary="Quantity - Item name" />
      </ListItem>
    </List>
  );
}
