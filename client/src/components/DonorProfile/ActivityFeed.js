import React from "react";
import "./ActivityFeed.scss";

export default function FollowingSection() {
  return (
    <div className="activity-feed-section">
      <h1 className="activity-feed-header">Activity Feed</h1>
      <div className="activity-feed-item">
        <i class="fa fa-caret-right" aria-hidden="true"></i>
        <p>task done</p>
        <p className="activity-feed-timestamp">timestamp</p>
      </div>
      <div className="activity-feed-item">
        <i class="fa fa-caret-right" aria-hidden="true"></i>
        <p>task done</p>
        <p className="activity-feed-timestamp">timestamp</p>
      </div>
    </div>
  );
}
