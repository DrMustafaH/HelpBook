import React from "react";
import Header from "../DonorProfile/Header";
import CustomProgressBar from "./ProgressBar";
import TotalFollowers from "./TotalFollowers";

export default function DonorProfile() {
  return (
    <div>
      <Header />
      <div>
        <TotalFollowers />
        <CustomProgressBar />
      </div>
    </div>
  );
}
