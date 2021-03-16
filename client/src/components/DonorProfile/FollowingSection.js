import React, { useEffect, useState } from "react";
import FollowingItem from "./FollowingItem";
import "./FollowingSection.scss";
import { Paper, withStyles } from "@material-ui/core";
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

export default function FollowingSection() {
  const params = useParams();
  const [userId] = useState(Number(params.id));
  const [followingList, setFollowingList] = useState([]);

  // axios call to get the following list of a user by the ide
  useEffect(() => {
    async function getFollowingList() {
      const res = await axios.get(`/api/users/following/${userId}`);
      setFollowingList(res.data);
    }
    getFollowingList();
  }, [userId]);

  // map function over the followingList state to output each user
  const mappedFollowingList = followingList.map((user, i) => {
    return (
      <FollowingItem
        key={i}
        avatar={user.followed_avatar}
        username={user.followed_username}
      />
    );
  });

  return (
    <div className="following-section">
      <StyledPaper>
        <div>Following</div>
        <div className="list-display">{mappedFollowingList}</div>
      </StyledPaper>
    </div>
  );
}
