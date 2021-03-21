import { ListItem, ListItemText, makeStyles } from "@material-ui/core";
import React from "react";
import Icon from "@material-ui/core/Icon";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import DonateItemForm from "./DonateItemForm";

// makestyles method to style the whole Wishlist item section
const useStyles = makeStyles(() => ({
  root: {
    width: "auto",
    backgroundColor: "#f0efec",
    position: "center",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    fontFamily: "'Hind Madurai', sans-serif",
    "&:hover": {
      borderRadius: 25,
      backgroundColor: "#dbd6c5",
      cursor: "pointer",
      // borderRadius: 25,
      // backgroundColor: "#0E212F",
      // cursor: "pointer",
      // color: "#f0efec",
    },
  },
}));

// WishlistItem component
export default function WishlistItem(props) {
  const classes = useStyles();

  // Function to switch icon according to category of item
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
      <DonateItemForm
        itemId={props.itemId}
        category={props.category}
        quantity={props.quantity}
        itemName={props.itemName}
        editWishlistItem={props.handleItemDonation}
      />
    </ListItem>
  );
}
