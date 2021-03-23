import React, { useEffect, useState } from "react";
import { List, makeStyles, Paper, withStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
import axios from "axios";
import FollowingItem from "./FollowingItem";
import "./FollowingSection.scss";

// withstyles method to style the Paper MUI react componect and assign a new name to it (StyledPaper)
const StyledPaper = withStyles({
  root: {
    background: "#f0efec",
    height: 400,
    width: "100%",
    color: "#0E212F",
    display: "flex",
    flexDirection: "column",
    fontFamily: "adobe-caslon-pro, serif",
    maxHeight: 500,
    "&.MuiPaper-elevation1": {
      boxShadow: "none",
    },
  },
})(Paper);

// makestyles method to style the whole following section
const useStyles = makeStyles(() => ({
  root: {
    width: "auto",
    // backgroundColor: "#f0efec",
    position: "center",
    padding: "20px 50px",
  },
}));

// FollowingSection component
export default function FollowingSection() {
  // States used in the FollowingSection component
  const classes = useStyles();
  const params = useParams();
  const [userId] = useState(Number(params.id));
  const [followingList, setFollowingList] = useState([]);

  // A useEffect that activates on every time the userId state (in the params) changes to get the user's following list by using the userId by an axios GET call
  useEffect(() => {
    async function getFollowingList() {
      const res = await axios.get(`/api/users/following/${userId}`);
      setFollowingList(res.data);
    }
    getFollowingList();
  }, [userId]);

  // Function called when unfollow button clicked to render the following list after unfollowing a user using filter to filtered out the unfollowed user
  const getUpdatedFollowing = (id) => {
    const filteredFollowingList = followingList.filter(
      (user) => user.id !== id
    );
    setFollowingList(filteredFollowingList);
  };

  // map function to render all followed users (receivers) who are followed by the logged in user (donor)
  const mappedFollowingList = followingList.map((user, i) => {
    return (
      <FollowingItem
        key={i}
        id={user.id}
        user_id={user.followed_user_id}
        avatar={user.followed_avatar}
        username={user.followed_username}
        onUnfollow={getUpdatedFollowing}
      />
    );
  });

  return (
    <div className="following-section">
      <StyledPaper>
        <div className="following-header">
          <h1>Following</h1>
          {/* <img className="arrow-icon-header" src="../images/arrow.png"></img> */}
        </div>
        <List className={classes.root}>
          <div className="list-display">{mappedFollowingList}</div>
        </List>
      </StyledPaper>
    </div>
  );
}
