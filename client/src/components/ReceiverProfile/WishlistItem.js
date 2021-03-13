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
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import Icon from "@material-ui/core/Icon";

// refugee <i class="fa fa-globe" aria-hidden="true"></i>
// women <i class="fa fa-female" aria-hidden="true"></i>
// health <i class="fa fa-medkit" aria-hidden="true"></i>
// animals <i class="fa fa-paw" aria-hidden="true"></i>
// kids import ChildCareIcon from '@material-ui/icons/ChildCare';
// education <i class="fa fa-graduation-cap" aria-hidden="true"></i>
// food import FastfoodIcon from '@material-ui/icons/Fastfood';
// others <i class="fa fa-random" aria-hidden="true"></i>;

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

const StyledIconEdit = withStyles({
  root: {
    marginLeft: 20,
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(EditIcon);
const StyledIconDelete = withStyles({
  root: {
    paddingLeft: 10,
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(DeleteForeverIcon);

const StyledCategoryIcon = withStyles({
  root: {
    // marginTop: 3,
    marginRight: 20,
  },
})(Icon);

export default function WishlistItem() {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <StyledCategoryIcon className="fa fa-globe" aria-hidden="true" />
        <ListItemText primary="Quantity - Item name" />
        <StyledIconEdit />
        <StyledIconDelete />
      </ListItem>
    </List>
  );
}
