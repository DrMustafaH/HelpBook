import React, { useEffect, useState } from "react";
import "./DonorProfile.scss";
import Header from "./Header";
import FollowingSection from "./FollowingSection";
import ActivityFeed from "./ActivityFeed";
import ScheduledVolunteering from "./ScheduledVolunteering";
import Recommendations from "./Recommendations";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DonorProfile() {
  const params = useParams();
  const [userId] = useState(Number(params.id));
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUserData() {
      const res = await axios.get(`/api/users/${userId}`);
      setUser(res.data[0]);
    }
    getUserData();
  }, [userId]);

  if (!user) return <div>loading...</div>;
  return (
    <div>
      <Header username={user.username} avatar={user.avatar} />
      <FollowingSection />
      <div className="two-columns">
        <ScheduledVolunteering />
        <ActivityFeed />
      </div>
      <Recommendations />
    </div>
  );
}
