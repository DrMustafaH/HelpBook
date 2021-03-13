import React from "react";
import Header from "../DonorProfile/Header";
import ProgressBar from "./ProgressBar";
import TotalFollowers from "./TotalFollowers";
import Wishlist from "./Wishlist";
import Donations from "./Donations";
import "./ReceiverProfile.scss";

export default function DonorProfile() {
  return (
    <div>
      <Header />
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
