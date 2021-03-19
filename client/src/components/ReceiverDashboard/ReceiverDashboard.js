import React, { useEffect, useState } from "react";
import Header from "./Header";
import ProgressBar from "./ProgressBar";
import TotalFollowers from "./TotalFollowers";
import Wishlist from "./Wishlist";
import Donations from "./Donations";
import "./ReceiverDashboard.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { withStyles, useStyles } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import jwt_decode from "jwt-decode";

const token = localStorage.getItem("token");
const decoded = jwt_decode(token);
console.log("TOKEN", decoded);

const StyledIconAdd = withStyles({
  root: {
    marginTop: 20,
    height: 35,
    width: 35,
    marginRight: 100,
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(PersonAddIcon);

export default function ReceiverDashboard() {
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

  // Function to add a new donation to the total donations
  const addNewDonation = (addedAmount, id) => {
    const copyTotalDonation = { ...totalDonation };
    setTotalDonation(...copyTotalDonation, {
      id: id,
      is_active: true,
      requested_money: totalDonation.requested_money,
      requested_money_id: totalDonation.requested_money_id,
      sum: totalDonation.sum + addedAmount,
      user_id: userId,
    });
  };

  useEffect(() => {
    async function getUserData() {
      const res = await axios.get(`/api/users/${userId}`);
      setUser(res.data);
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
    }
    getDonationMoneyLog();
  }, [userId]);

  useEffect(() => {
    async function getDonationItemLog() {
      const res = await axios.get(`/api/users/wishlistDonationLog/${userId}`);
      setDonationItemLog(res.data);
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

  //Axios post to follow a user
  async function handleFollow() {
    await axios.post(
      `/api/users/following/${userId}/add`,
      {
        user_id: decoded.userId,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    // props.onFollow(props.id);
  }
  // const classes = useStyles();

  if (!user) return <div>User does not exist</div>;
  return (
    <div>
      <div className="header-receiver-dash">
        <Header username={user.username} avatar={user.avatar}></Header>
        <StyledIconAdd onClick={handleFollow} />
      </div>
      <div className="receiver-followers">
        {followersCount && <TotalFollowers count={followersCount} />}
        {totalDonation && (
          <ProgressBar
            sum={totalDonation.sum}
            requested_amount={totalDonation.requested_amount}
            requested_money_id={totalDonation.requested_money_id}
            addNewDonation={addNewDonation}
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
