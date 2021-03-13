import React from "react";
import Header from "../DonorProfile/Header";
import ProgressBar from "./ProgressBar";
import TotalFollowers from "./TotalFollowers";
import "./ReceiverProfile.scss";

export default function DonorProfile() {
  return (
    <div>
      <Header />
      <div className="receiver-followers">
        <TotalFollowers />
        <ProgressBar />
      </div>
    </div>
  );
}
