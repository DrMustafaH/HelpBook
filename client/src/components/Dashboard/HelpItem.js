import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import React, { useState } from "react";
import axios from "axios";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import jwt_decode from "jwt-decode";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";

const token = localStorage.getItem("token");
const decoded = jwt_decode(token);

const useStyles = makeStyles((props) => ({
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
const StyledIconAdd = withStyles({
  root: {
    marginTop: 20,
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(PersonAddIcon);

const StyledIconRemove = withStyles({
  root: {
    marginTop: 20,
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(RemoveCircleIcon);

export default function HelpItem(props) {
  const [disableBtn, setDisableBtn] = useState(true);
  const classes = useStyles();

  //Axios post to follow a user
  async function handleFollow() {
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

  // display back the follow icon (does not remove from database)
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
