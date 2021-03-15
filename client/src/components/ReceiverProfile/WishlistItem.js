import {
  ListItem,
  ListItemText,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import Icon from "@material-ui/core/Icon";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import ChildCareIcon from "@material-ui/icons/ChildCare";

const useStyles = makeStyles(() => ({
  root: {
    "&:hover": {
      backgroundColor: "#dbd6c5",
      borderRadius: 22,
    },
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

export default function WishlistItem(props) {
  const classes = useStyles();
  function categoryIcon() {
    switch (props.category) {
      case 1:
        return <Icon className="fa fa-medkit category-item" />;
      case 2:
        return <FastfoodIcon className="category-item" />;
      case 3:
        return <Icon className="fa fa-globe category-item" />;
      case 4:
        return <Icon className="fa fa-graduation-cap category-item" />;
      case 5:
        return <Icon className="fa fa-paw category-item" />;
      case 6:
        return <ChildCareIcon className="category-item" />;
      case 7:
        return <Icon className="fa fa-female category-item" />;
      default:
        return <Icon class="fa fa-random category-item" />;
    }
  }

  return (
    <ListItem alignItems="flex-start" className={classes.root}>
      {categoryIcon()}
      <ListItemText>
        {props.quantity} - {props.itemName}
      </ListItemText>
      <StyledIconEdit />
      <StyledIconDelete />
    </ListItem>
  );
}
