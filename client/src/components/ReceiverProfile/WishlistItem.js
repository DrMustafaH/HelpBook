import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  ListItem,
  ListItemText,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Icon from "@material-ui/core/Icon";
import EditItemForm from "./EditItemForm";

// makestyles method to style the whole Wishlist item
const useStyles = makeStyles(() => ({
  root: {
    "&:hover": {
      backgroundColor: "#dbd6c5",
      borderRadius: 22,
    },
  },
}));

// withstyles method to style the DeleteForeverIcon MUI react componect and assign a new name to it (StyledIconDelete)
const StyledIconDelete = withStyles({
  root: {
    paddingLeft: 10,
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(DeleteForeverIcon);

// WishListItem component
export default function WishlistItem(props) {
  // States used in the WishlistItem component
  const params = useParams();
  const classes = useStyles();

  // Async function to be evoked when delete button is clicked in wishlist item
  async function handleDelete() {
    // Axios POST call to delete a wishlist item in the database
    await axios.post(
      `/api/wishlist/${params.id}/delete`,
      {
        id: props.id,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    props.onDelete(props.id);
  }

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
        return <Icon className="fa fa-random category-item" />;
    }
  }

  return (
    <ListItem alignItems="flex-start" className={classes.root}>
      {categoryIcon()}
      <ListItemText>
        {props.quantity} - {props.itemName}
      </ListItemText>
      <EditItemForm
        id={props.id}
        editWishlistItem={props.handleEdit}
        itemName={props.itemName}
        category={props.category}
        quantity={props.quantity}
      />
      <StyledIconDelete onClick={handleDelete} />
    </ListItem>
  );
}
