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
  const [donationMoneyLog, setDonationMoneyLog] = useState([]);
  const [donationItemLog, setDonationItemLog] = useState([]);

  useEffect(() => {
    async function getUserData() {
      const res = await axios.get(`/api/users/${userId}`);
      setUser(res.data);
    }
    getUserData();
  }, [userId]);

  useEffect(() => {
    async function getDonationMoneyLog() {
      const res = await axios.get(`/api/users/activityMoneyLog/${userId}`);
      setDonationMoneyLog(res.data);
    }
    getDonationMoneyLog();
  }, [userId]);

  useEffect(() => {
    async function getDonationItemLog() {
      const res = await axios.get(`/api/users/wishlistActivityLog/${userId}`);
      setDonationItemLog(res.data);
    }
    getDonationItemLog();
  }, [userId]);

  if (!user) return <div>loading...</div>;
  return (
    <div>
      <Header username={user.username} avatar={user.avatar} />
      <FollowingSection />
      <div className="two-columns">
        <ScheduledVolunteering />
        <ActivityFeed moneyLog={donationMoneyLog} itemLog={donationItemLog} />
      </div>
      <Recommendations />
    </div>
  );
}
