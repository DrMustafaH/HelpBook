import React from "react";
import "./Wishlist.scss";
import { List, makeStyles, Paper, withStyles } from "@material-ui/core";
import WishlistItem from "./WishlistItem";

// withstyles method to style the Paper MUI react componect and assign a new name to it (StyledPaper)
const StyledPaper = withStyles({
  root: {
    background: "#f0efec",
    height: 500,
    width: "100%",
    color: "#0E212F",
    fontFamily: "adobe-caslon-pro, seri",
    fontWeight: "700",
    fontSize: "1.3rem",
    borderRadius: 0,
    maxHeight: 500,
    overflow: "auto",
  },
})(Paper);

// makestyles method to style the whole Wishlist section
const useStyles = makeStyles(() => ({
  root: {
    width: "auto",
    backgroundColor: "#f0efec",
    borderRadius: 22,
    position: "center",
    padding: "0 20px 20px 20px",
    width: "60%",
    margin: "auto",
  },
}));

// Wishlist component
export default function Wishlist(props) {
  const classes = useStyles();

  // map all wishlist items of the user
  const mappedWishList = props.wishlist.map((wishListItem, i) => {
    if (wishListItem.quantity !== 0) {
      return (
        <WishlistItem
          key={i}
          itemId={wishListItem.id}
          category={wishListItem.category_id}
          itemName={wishListItem.item_name}
          is_active={wishListItem.is_active}
          quantity={wishListItem.quantity}
          handleItemDonation={props.handleItemDonation}
        />
      );
    }
  });
  return (
    <div className="wishlist-section">
      <StyledPaper>
        <h1 className="wishlist-title">Wish List</h1>
        <List className={classes.root}>{mappedWishList}</List>
      </StyledPaper>
    </div>
  );
}
