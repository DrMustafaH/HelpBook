import React, { useEffect, useState } from "react";
import "./Wishlist.scss";
import { List, makeStyles, Paper, withStyles } from "@material-ui/core";
import WishlistItem from "./WishlistItem";
import axios from "axios";
import { useParams } from "react-router";

// withstyles method to style the Paper MUI react componect and assign a new name to it (StyledPaper)
const StyledPaper = withStyles({
  root: {
    background: "#f0efec",
    height: 500,
    width: "100%",
    color: "#0E212F",
    fontFamily: "'Trirong', serif",
    fontWeight: "700",
    fontSize: "2rem",
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
  },
}));

// Wishlist component
export default function Wishlist(props) {
  const classes = useStyles();
  const params = useParams();
  const [userId] = useState(Number(params.id));
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    async function getWishlistItems() {
      const res = await axios.get(`/api/wishlist/${userId}`);
      setWishlist(res.data);
    }
    getWishlistItems();
  }, [userId]);

  const GetEditedWishlist = (newWishlistItem, id) => {
    const copyWishlist = [...wishlist];
    copyWishlist.map((item, i) => {
      if (item.id === id) {
        copyWishlist[i] = newWishlistItem;
      }
    });
    setWishlist(copyWishlist);
  };

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
          handleItemDonation={GetEditedWishlist}
        />
      );
    }
  });
  return (
    <div className="wishlist-section">
      <StyledPaper>
        <h3 className="wishlist-title">Wish List</h3>
        <List className={classes.root}>{mappedWishList}</List>
      </StyledPaper>
    </div>
  );
}
