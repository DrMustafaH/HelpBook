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
    margin: "50px 10px 10px 10px",
    color: "#0E212F",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Trirong', serif",
    fontWeight: "700",
    fontSize: "2.5rem",
    borderRadius: 0,
    maxHeight: 500,
    overflow: "auto",
  },
})(Paper);

// makestyles method to style the whole following section
const useStyles = makeStyles(() => ({
  root: {
    width: "auto",
    backgroundColor: "#f0efec",
    borderRadius: 22,
    position: "center",
    padding: 0,
    marginLeft: 10,
  },
  inline: {
    display: "inline",
    fontFamily: "'Hind Madurai', sans-serif",
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
        <div>Following</div>
        <List className={classes.root}>
          <div className="list-display">{mappedFollowingList}</div>
        </List>
      </StyledPaper>
    </div>
  );
}
