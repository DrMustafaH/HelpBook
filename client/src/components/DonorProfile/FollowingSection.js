import React from "react";
import "./FollowingSection.scss";

export default function FollowingSection() {
  return (
    <div className="following-section">
      <h1 className="following-section-header">Following:</h1>

      <div className="list-display">
        <div>
          <div className="following-receiver-summary">
            <img
              alt="profile"
              src="https://robohash.org/doloribusdolornam.jpg?size=50x50&set=set1"
            ></img>
            <div className="following-receiver-info">
              <h3>Name</h3>
              <p>description</p>
            </div>
            <i class="fa fa-minus-circle" aria-hidden="true"></i>
          </div>
          <div className="following-receiver-summary">
            <img
              alt="profile"
              src="https://robohash.org/impeditutsapiente.png?size=50x50&set=set1"
            ></img>
            <div className="following-receiver-info">
              <h3>Name</h3>
              <p>description</p>
            </div>
            <i class="fa fa-minus-circle" aria-hidden="true"></i>
          </div>
        </div>
        <div>
          <div className="following-receiver-summary">
            <img
              alt="profile"
              src="https://robohash.org/etconsequaturmagni.png?size=50x50&set=set1"
            ></img>
            <div className="following-receiver-info">
              <h3>Name</h3>
              <p>description</p>
            </div>
            <i class="fa fa-minus-circle" aria-hidden="true"></i>
          </div>
          <div className="following-receiver-summary">
            <img
              alt="profile"
              src="https://robohash.org/sitetvel.png?size=50x50&set=set1"
            ></img>
            <div className="following-receiver-info">
              <h3>Name</h3>
              <p>description</p>
            </div>
            <i class="fa fa-minus-circle" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <p>Click here to see more</p>
    </div>
  );
}
