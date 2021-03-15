import React, { useEffect, useState } from "react";
import Header from "../DonorProfile/Header";
import ProgressBar from "./ProgressBar";
import TotalFollowers from "./TotalFollowers";
import Wishlist from "./Wishlist";
import Donations from "./Donations";
import "./ReceiverProfile.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ReceiverProfile() {
  const params = useParams();
  const [userId, setUserId] = useState(Number(params.id));
  const [user, setUser] = useState();
  const [followersCount, setFollowersCount] = useState();
  const [donationLog, setDonationLog] = useState();
  const [totalDonation, setTotalDonation] = useState({
    id: 0,
    is_active: false,
    requested_money: 0,
    requested_money_id: 0,
    sum: 0,
    user_id: 0,
  });

  useEffect(() => {
    async function getUserData() {
      const res = await axios.get(`/api/users/${userId}`);
      setUser(res.data[0]);
    }
    getUserData();
  }, [userId]);

  useEffect(() => {
    async function getFollowersCount() {
      const res = await axios.get(`/api/users/followers/${userId}`);
      setFollowersCount(res.data);
    }
    getFollowersCount();
  }, [userId]);

  useEffect(() => {
    async function getTotalDonations() {
      const res = await axios.get(`/api/users/total_donation/${userId}`);
      setTotalDonation(res.data);
    }
    getTotalDonations();
  }, [userId]);

  useEffect(() => {
    async function getDonationLog() {
      const res = await axios.get(`/api/users/donationLog/${userId}`);
      setDonationLog(res.data);
      console.log("RES>DATA", res.data);
    }
    getDonationLog();
  }, [userId]);

  // console.log("USR", user);
  // console.log("FLLS", followersCount);
  // console.log("DONATION", totalDonation);
  if (!user) return <div>User does not exist</div>;
  return (
    <div>
      <Header username={user.username} avatar={user.avatar} />
      <div className="receiver-followers">
        {followersCount && <TotalFollowers count={followersCount} />}
        {totalDonation && (
          <ProgressBar
            sum={totalDonation.sum}
            requested_amount={totalDonation.requested_amount}
          />
        )}
      </div>
      <div className="wishlist-donations-section">
        <Wishlist />
        {donationLog && <Donations donationLog={donationLog} />}
      </div>
    </div>
  );
}
