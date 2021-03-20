import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { withStyles } from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import TotalFollowers from "./TotalFollowers";
import ProgressBar from "./ProgressBar";
import Donations from "./Donations";
import Wishlist from "./Wishlist";
import Header from "./Header";
import "./ReceiverDashboard.scss";

// withstyles method to style the PersonAddIcon MUI react componect and assign a new name to it (StyledIconAdd)
const StyledIconAdd = withStyles({
  root: {
    height: 35,
    width: 35,
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(PersonAddIcon);

// withstyles method to style the RemoveCircleIcon MUI react componect and assign a new name to it (StyledIconRemove)
const StyledIconRemove = withStyles({
  root: {
    height: 35,
    width: 35,
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(RemoveCircleIcon);

// ReceiverDashboard component
export default function ReceiverDashboard() {
  // States used in the ReceiverDashboard component
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
  const [disableBtn, setDisableBtn] = useState(true);

  // Function to add a new donation made to the total donations sum
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

  // A useEffect that activates on every time the userId state (in the params) changes to get the total donations made to the user (receiver) by using the userId by an axios GET call
  useEffect(() => {
    async function getTotalDonations() {
      const res = await axios.get(`/api/users/total_donation/${userId}`);
      setTotalDonation(res.data);
    }
    getTotalDonations();
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

  // A useEffect that activates on every time the userId state (in the params) changes to get the user wishlist by using the userId by an axios GET call
  useEffect(() => {
    async function getWishlistItems() {
      const res = await axios.get(`/api/wishlist/${userId}`);
      setWishlist(res.data);
    }
    getWishlistItems();
  }, [userId]);

  // Async function to be evoked when follow button is clicked by a user (donor) in receiverDashboard
  async function handleFollow() {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    // Axios POST using Token to add followed user (receiver) to following list in user profile (donor)
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
    // Change follow button to unfollow button
    setDisableBtn(false);
  }

  // display back the follow icon after the unfollow icon (does not remove from database)
  const handleUnFollowStyle = () => {
    setDisableBtn(true);
  };

  // condition if no user in state then the following will render
  if (!user) return <h4>User does not exist</h4>;
  return (
    <div>
      <div className="header-receiver-dash">
        <Header username={user.username} avatar={user.avatar}></Header>
        {disableBtn && <StyledIconAdd onClick={handleFollow} />}
        {!disableBtn && <StyledIconRemove onClick={handleUnFollowStyle} />}
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
