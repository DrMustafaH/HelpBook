import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import Header from "./Header";
import FollowingSection from "./FollowingSection";
import ActivityFeed from "./ActivityFeed";
import ScheduledVolunteering from "./ScheduledVolunteering";
import Recommendations from "./Recommendations";
import "./DonorProfile.scss";

// DonorProfile component
export default function DonorProfile() {
  // States used in the DonorProfile component
  const params = useParams();
  const [userId] = useState(Number(params.id));
  const [user, setUser] = useState();
  const [donationMoneyLog, setDonationMoneyLog] = useState([]);
  const [donationItemLog, setDonationItemLog] = useState([]);

  // A useEffect that activates on every time the userId state (in the params) changes to get the user information by using the userId by an axios GET call
  useEffect(() => {
    async function getUserData() {
      const res = await axios.get(`/api/users/${userId}`);
      setUser(res.data);
    }
    getUserData();
  }, [userId]);

  // A useEffect that activates on every time the userId state (in the params) changes to get the money donated by that specific user to show in log by an axios GET call
  useEffect(() => {
    async function getDonationMoneyLog() {
      const res = await axios.get(`/api/users/activityMoneyLog/${userId}`);
      setDonationMoneyLog(res.data);
    }
    getDonationMoneyLog();
  }, [userId]);

  // A useEffect that activates on every time the userId state (in the params) changes to get the item donated by that specific user to show in log by an axios GET call
  useEffect(() => {
    async function getDonationItemLog() {
      const res = await axios.get(`/api/users/wishlistActivityLog/${userId}`);
      setDonationItemLog(res.data);
    }
    getDonationItemLog();
  }, [userId]);

  // if user state is empty then loading will appear till state gets feeded by above axios call
  if (!user)
    return (
      <div>
        <CircularProgress />
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div>
      <Header username={user.username} avatar={user.avatar} />
      <FollowingSection />
      <div className="volunteering-feed">
        <ScheduledVolunteering />
        <ActivityFeed moneyLog={donationMoneyLog} itemLog={donationItemLog} />
      </div>
      <Recommendations />
    </div>
  );
}
