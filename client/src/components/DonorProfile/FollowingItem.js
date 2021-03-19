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
import { useHistory } from "react-router-dom";

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

const StyledIconRemove = withStyles({
  root: {
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(RemoveCircleIcon);

export default function FollowingItem(props) {
  const history = useHistory();
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
