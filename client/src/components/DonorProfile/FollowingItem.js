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
    // width: "auto",
    // backgroundColor: "#f0efec",
    // position: "center",
    // padding: 0,
    // marginLeft: 10,
    "&:hover": {
      borderRadius: 22,
      backgroundColor: "#dbd6c5",
      cursor: "pointer",
    },
  },
  // inline: {
  //   display: "inline",
  //   fontFamily: "'Hind Madurai', sans-serif",
  // },
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
    <ListItem alignItems="flex-start" className={classes.root}>
      <ListItemAvatar onClick={handleClick}>
        <Avatar alt="avatar" src={props.avatar} />
      </ListItemAvatar>
      <ListItemText primary={props.username} onClick={handleClick} />
      <StyledIconRemove onClick={handleUnfollow} />
    </ListItem>
  );
}
