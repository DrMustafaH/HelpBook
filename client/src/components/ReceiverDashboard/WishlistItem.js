import { ListItem, ListItemText, makeStyles } from "@material-ui/core";
import React from "react";
import Icon from "@material-ui/core/Icon";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import DonateItemForm from "./DonateItemForm";

const useStyles = makeStyles(() => ({
  root: {
    "&:hover": {
      backgroundColor: "#dbd6c5",
      borderRadius: 22,
    },
  },
}));

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
      <DonateItemForm />
    </ListItem>
  );
}
