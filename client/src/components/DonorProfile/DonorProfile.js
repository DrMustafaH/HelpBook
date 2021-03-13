import React from "react";
import "./DonorProfile.scss";
import Header from "./Header";
import FollowingSection from "./FollowingSection";
import ActivityFeed from "./ActivityFeed";
import ScheduledVolunteering from "./ScheduledVolunteering";
import Recommendations from "./Recommendations";

export default function DonorProfile() {
  return (
    <div>
      <Header />
      <FollowingSection />
      <div className="two-columns">
        <ScheduledVolunteering />
        <ActivityFeed />
      </div>
      <Recommendations />
    </div>
  );
}
