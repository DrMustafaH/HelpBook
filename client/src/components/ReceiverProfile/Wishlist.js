import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, makeStyles, Paper, withStyles } from "@material-ui/core";
import WishlistItem from "./WishlistItem";
import AddItemForm from "./AddItemForm";
import { useParams } from "react-router-dom";
import "./Wishlist.scss";

// withstyles method to style the Paper MUI react componect and assign a new name to it (StyledPaper)
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

// makestyles method to style the whole Wishlist section
const useStyles = makeStyles(() => ({
  root: {
    width: "auto",
    backgroundColor: "#f0efec",
    borderRadius: 22,
    position: "center",
    padding: 0,
    marginLeft: 10,
    marginTop: 0,
  },
}));

// Wishlist component
export default function Wishlist() {
  // States used in the Wishlist component
  const classes = useStyles();
  const params = useParams();
  const [userId] = useState(Number(params.id));
  const [wishlist, setWishlist] = useState([]);

  // A useEffect that activates on every time the userId state (in the params) changes to get the user's (receiver) wishlist item by using the userId by an axios GET call
  useEffect(() => {
    async function getWishlistItems() {
      const res = await axios.get(`/api/wishlist/${userId}`);
      setWishlist(res.data);
    }
    getWishlistItems();
  }, [userId]);

  // Render the wishlist item after adding a new item
  const handleNewWishlist = (newWishlist) => {
    const copyWishlist = [...wishlist];
    copyWishlist.push(newWishlist);
    setWishlist(copyWishlist);
  };

  // Render the wishlist items after deleting an item using filter
  const GetWishlist = (id) => {
    const filterWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(filterWishlist);
  };

  //Render the wishlist items after editing an item using map to replace edited item
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
  const mappedWishList = wishlist.map((wishListItem, i) => {
    if (wishListItem.quantity !== 0) {
      return (
        <WishlistItem
          key={i}
          id={wishListItem.id}
          category={wishListItem.category_id}
          itemName={wishListItem.item_name}
          is_active={wishListItem.is_active}
          quantity={wishListItem.quantity}
          onDelete={GetWishlist}
          handleEdit={GetEditedWishlist}
        />
      );
    }
  });

  return (
    <div className="wishlist-section">
      <StyledPaper>
        <div className="wishlist-items-list">
          Wish List
          <div>
            <AddItemForm addNewWishlist={handleNewWishlist} />
          </div>
          <List className={classes.root}>{mappedWishList}</List>
        </div>
      </StyledPaper>
    </div>
  );
}
