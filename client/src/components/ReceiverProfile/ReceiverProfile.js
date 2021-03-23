import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../DonorProfile/Header";
import ProgressBar from "./ProgressBar";
import TotalFollowers from "./TotalFollowers";
import Wishlist from "./Wishlist";
import Donations from "./Donations";
import Calendar from "../ReceiverDashboard/Calendar";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./ReceiverProfile.scss";
import { withStyles } from "@material-ui/core";

// ReceiverProfile component
export default function ReceiverProfile() {
  // States used in the ReceiverProfile component
  const params = useParams();
  const [userId] = useState(Number(params.id));
  const [user, setUser] = useState();
  const [followersCount, setFollowersCount] = useState();
  const [donationMoneyLog, setDonationMoneyLog] = useState();
  const [donationItemLog, setDonationItemLog] = useState();

  // A useEffect that activates on every time the userId state (in the params) changes to get the user information by using the userId by an axios GET call
  useEffect(() => {
    async function getUserData() {
      const res = await axios.get(`/api/users/${userId}`);
      setUser(res.data);
    }
    getUserData();
  }, [userId]);

  // A useEffect that activates on every time the userId state (in the params) changes to get the user's (receiver) followers count by using the userId by an axios GET call
  useEffect(() => {
    async function getFollowersCount() {
      const res = await axios.get(`/api/users/followers/${userId}`);
      setFollowersCount(res.data);
    }
    getFollowersCount();
  }, [userId]);

  // A useEffect that activates on every time the userId state (in the params) changes to get the user donations log by using the userId by an axios GET call
  useEffect(() => {
    async function getDonationMoneyLog() {
      const res = await axios.get(`/api/users/donationLog/${userId}`);
      setDonationMoneyLog(res.data);
    }
    getDonationMoneyLog();
  }, [userId]);

  // A useEffect that activates on every time the userId state (in the params) changes to get the user wishlist items donation log by using the userId by an axios GET call
  useEffect(() => {
    async function getDonationItemLog() {
      const res = await axios.get(`/api/users/wishlistDonationLog/${userId}`);
      setDonationItemLog(res.data);
    }
    getDonationItemLog();
  }, [userId]);

  // withstyles method to style the AddCircleIcon MUI react componect and assign a new name to it (StyledAddIcon)
  const StyledAddEventIcon = withStyles({
    root: {
      fontSize: "40px",
      "&:hover": {
        color: "#3891A6",
        cursor: "pointer",
      },
    },
  })(AddCircleIcon);

  // condition if no user in state then the following will render
  if (!user) return <h4>User does not exist</h4>;
  return (
    <div>
      <Header username={user.username} avatar={user.avatar} />
      <div className="receiver-followers">
        {followersCount && <TotalFollowers count={followersCount} />}
        <ProgressBar />
      </div>
      <div className="wishlist-donations-section">
        <Wishlist />
        {donationMoneyLog && donationItemLog && (
          <Donations donationLog={donationMoneyLog} itemLog={donationItemLog} />
        )}
      </div>
      <div>
        <h1 className="volunteering-heading">Volunteering - Event Calendar</h1>
        <div className="volunteering-section">
          <Calendar />
          <div className="participate-event">
            <StyledAddEventIcon />
            <p>Add an event to calendar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
