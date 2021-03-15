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
  // const [followersCount, setFollowersCount] = useState([]);
  // useEffect(() => {
  //   axios.get(`/api/users/followers/${ID}`).then((res) => {
  //     setFollowersCount(res.data);
  //   });
  // }, []);
  const params = useParams();
  const [userId, setUserId] = useState(Number(params.id));
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUserData() {
      const res = await axios.get(`/api/users/${userId}`);
      // console.log("RES1", res.data[0]);
      setUser(res.data[0]);
    }
    getUserData();
  }, [userId]);
  if (!user) return <div>User does not exist</div>;
  return (
    <div>
      <Header username={user.username} avatar={user.avatar} />
      <div className="receiver-followers">
        <TotalFollowers />
        <ProgressBar />
      </div>
      <div className="wishlist-donations-section">
        <Wishlist />
        <Donations />
      </div>
    </div>
  );
}
