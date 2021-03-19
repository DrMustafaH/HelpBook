import React, { useEffect, useState } from "react";
import FollowingItem from "./FollowingItem";
import "./FollowingSection.scss";
import { List, makeStyles, Paper, withStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";
import axios from "axios";

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

const useStyles = makeStyles(() => ({
  root: {
    width: "auto",
    backgroundColor: "#f0efec",
    borderRadius: 22,
    position: "center",
    padding: 0,
    marginLeft: 10,
    // "&:hover": {
    //   backgroundColor: "#dbd6c5",
    //   cursor: "pointer",
    // },
  },
  inline: {
    display: "inline",
    fontFamily: "'Hind Madurai', sans-serif",
  },
}));

export default function FollowingSection() {
  const classes = useStyles();
  const params = useParams();
  const [userId] = useState(Number(params.id));
  const [followingList, setFollowingList] = useState([]);

  // axios call to get the following list of a user by the id
  useEffect(() => {
    async function getFollowingList() {
      const res = await axios.get(`/api/users/following/${userId}`);
      setFollowingList(res.data);
    }
    getFollowingList();
  }, [userId]);

  // Render the following users list after unfollowing a user using filter
  const getUpdatedFollowing = (id) => {
    const filteredFollowingList = followingList.filter(
      (user) => user.id !== id
    );
    setFollowingList(filteredFollowingList);
  };

  // map function over the followingList state to output each user
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
