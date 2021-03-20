import React from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

// makestyles method to style the user followed item in the following list
const useStyles = makeStyles(() => ({
  root: {
    padding: "10px 20px",
    "&:hover": {
      borderRadius: 22,
      backgroundColor: "#dbd6c5",
      cursor: "pointer",
    },
  },
  avatar: {
    border: "1px solid #0E212F",
  },
}));

// withstyles method to style the RemoveCircleIcon MUI react componect and assign a new name to it (StyledIconRemove)
const StyledIconRemove = withStyles({
  root: {
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(RemoveCircleIcon);

// FollowingItem component
export default function FollowingItem(props) {
  // States used in the FollowingItem component
  const history = useHistory();
  const params = useParams();
  const classes = useStyles();

  //Async function that uses Token and accordingly makes an axios POST call to unfollow a user (receiver) by clicking the unfollow button in the FollowingItem and the item will be removed from list and the database
  async function handleUnfollow() {
    await axios.post(
      `/api/users/following/${params.id}/delete`,
      {
        id: props.id,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    props.onUnfollow(props.id);
  }

  // A handleClick function that directs to user (donor) to the other user (receiver) profile by clicking on the followingItem of that specific user
  function handleClick() {
    history.push(`/receiverDash/${props.user_id}`);
  }

  return (
    <ListItem className={classes.root}>
      <ListItemAvatar onClick={handleClick}>
        <Avatar alt="avatar" src={props.avatar} className={classes.avatar} />
      </ListItemAvatar>
      <ListItemText primary={props.username} onClick={handleClick} />
      <StyledIconRemove onClick={handleUnfollow} />
    </ListItem>
  );
}
