import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import React from "react";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import axios from "axios";
import { useParams } from "react-router-dom";

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
    fontFamily: "'Hind Madurai', sans-serif",
  },
}));

const StyledIconRemove = withStyles({
  root: {
    marginTop: 20,
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(RemoveCircleIcon);

export default function FollowingItem(props) {
  const params = useParams();
  //Axios post to delete following user item
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
  const classes = useStyles();
  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="avatar" src={props.avatar} />
        </ListItemAvatar>
        <ListItemText primary={props.username} />
        <StyledIconRemove onClick={handleUnfollow} />
      </ListItem>
    </List>
  );
}
