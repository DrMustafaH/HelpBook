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
  const [userId] = useState(Number(params.id));
  const [user, setUser] = useState();
  const [followersCount, setFollowersCount] = useState();
  const [donationMoneyLog, setDonationMoneyLog] = useState();
  const [donationItemLog, setDonationItemLog] = useState();
  const [wishlist, setWishlist] = useState();
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
    async function getDonationMoneyLog() {
      const res = await axios.get(`/api/users/donationLog/${userId}`);
      setDonationMoneyLog(res.data);
      // console.log("DONATION-MONEY", res.data);
    }
    getDonationMoneyLog();
  }, [userId]);

  useEffect(() => {
    async function getDonationItemLog() {
      const res = await axios.get(`/api/users/wishlistDonationLog/${userId}`);
      setDonationItemLog(res.data);
      // console.log("DONATION-ITEM", res.data);
    }
    getDonationItemLog();
  }, [userId]);

  useEffect(() => {
    async function getWishlistItems() {
      const res = await axios.get(`/api/wishlist/${userId}`);
      setWishlist(res.data);
    }
    getWishlistItems();
  }, [userId]);

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
        {wishlist && <Wishlist wishlist={wishlist} />}
        {donationMoneyLog && donationItemLog && (
          <Donations donationLog={donationMoneyLog} itemLog={donationItemLog} />
        )}
      </div>
    </div>
  );
}
