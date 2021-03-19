import {
  Avatar,
  FormHelperText,
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
import { red } from "@material-ui/core/colors";

// let decoded;

// if ("token" in localStorage) {
//   const token = localStorage.getItem("token");
//   decoded = jwt_decode(token);
// }

const useStyles = makeStyles((props) => ({
  root: {
    width: "auto",
    backgroundColor: "#f0efec",
    position: "center",
    padding: "5px 0",
    padding: "20 40px",
    display: "flex",
    alignItems: "center",
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
  avatar: {
    border: "1px solid #0E212F",
  },
}));
const StyledIconAdd = withStyles({
  root: {
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(PersonAddIcon);

const StyledIconRemove = withStyles({
  root: {
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

  // display back the follow icon (does not remove from database)
  const handleUnFollowStyle = () => {
    setDisableBtn(true);
  };

  return (
    <ListItem className={classes.root} alignItems="flex-start">
      <ListItemAvatar onClick={() => props.onUserSelection()}>
        <Avatar
          className={classes.avatar}
          alt="org-avatar"
          src={props.avatar}
        />
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
