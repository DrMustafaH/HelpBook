import React, { useState } from "react";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import axios from "axios";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import jwt_decode from "jwt-decode";

// makestyles method to style each helplist items
const useStyles = makeStyles(() => ({
  root: {
    width: "auto",
    backgroundColor: "#f0efec",
    borderRadius: 22,
    position: "center",
    padding: 0,
    marginLeft: 10,
    "&:hover": {
      backgroundColor: "#dbd6c5",
      cursor: "pointer",
    },
  },
  inline: {
    display: "inline",
  },
}));

// withstyles method to style the PersonAddIcon MUI react componect and assign a new name to it (StyledIconAdd)
const StyledIconAdd = withStyles({
  root: {
    marginTop: 20,
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(PersonAddIcon);

// withstyles method to style the RemoveCircleIcon MUI react componet and assign a new name to it (StyledIconRemove)
const StyledIconRemove = withStyles({
  root: {
    marginTop: 20,
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(RemoveCircleIcon);

// HelpItem component
export default function HelpItem(props) {
  const [disableBtn, setDisableBtn] = useState(true);
  const classes = useStyles();

  // Async function that uses Token and accordingly makes an axios POST call to follow a user (receiver) by clicking the add button in the helpItem and change button look on success of follow
  async function handleFollow() {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    await axios.post(
      `/api/users/following/${props.id}/add`,
      {
        user_id: decoded.userId,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    setDisableBtn(false);
  }

  // Handle a second click on the follow/unfollow button to turn it back to the follow look but this does not remove entry from database
  const handleUnFollowStyle = () => {
    setDisableBtn(true);
  };

  return (
    <ListItem className={classes.root} alignItems="flex-start">
      <ListItemAvatar onClick={() => props.onUserSelection()}>
        <Avatar alt="org-avatar" src={props.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={props.username}
        onClick={() => props.onUserSelection()}
      />
      {disableBtn && <StyledIconAdd onClick={handleFollow} />}
      {!disableBtn && <StyledIconRemove onClick={handleUnFollowStyle} />}
    </ListItem>
  );
}
