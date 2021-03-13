import React from "react";
import "./Wishlist.scss";
import { Paper, withStyles } from "@material-ui/core";
import WishlistItem from "./WishlistItem";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const StyledPaper = withStyles({
  root: {
    background: "#f0efec",
    height: 500,
    width: "45%",
    margin: "50px 10px 10px 10px",
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

const StyledAddIcon = withStyles({
  root: {
    fontSize: "40px",
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(AddCircleIcon);

export default function Wishlist() {
  return (
    <div className="wishlist-section">
      <StyledPaper>
        <div className="wishlist-items-list">
          Wish List
          <div>
            <StyledAddIcon className="add-wish-btn" />
          </div>
          <WishlistItem />
          <WishlistItem />
          <WishlistItem />
          <WishlistItem />
          <WishlistItem />
        </div>
      </StyledPaper>
    </div>
  );
}
