import React from "react";
import "./Wishlist.scss";
import { List, makeStyles, Paper, withStyles } from "@material-ui/core";
import WishlistItem from "./WishlistItem";

const StyledPaper = withStyles({
  root: {
    background: "#f0efec",
    height: 500,
    width: "100%",
    margin: "0 10px 10px 0",
    color: "#0E212F",
    display: "flex",
    justifyContent: "center",
    fontFamily: "'Trirong', serif",
    fontWeight: "700",
    fontSize: "2.5rem",
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
    // "&:hover": {
    //   backgroundColor: "#dbd6c5",
    // },
  },
}));

export default function Wishlist(props) {
  const classes = useStyles();
  const mappedWishList = props.wishlist.map((wishListItem) => {
    return (
      <WishlistItem
        key={wishListItem.id}
        category={wishListItem.category_id}
        itemName={wishListItem.item_name}
        is_active={wishListItem.is_active}
        quantity={wishListItem.quantity}
      />
    );
  });
  return (
    <div className="wishlist-section">
      <StyledPaper>
        <div className="wishlist-items-list">
          <h3 className="wishlist-title">Wish List</h3>
          <List className={classes.root}>{mappedWishList}</List>
        </div>
      </StyledPaper>
    </div>
  );
}
