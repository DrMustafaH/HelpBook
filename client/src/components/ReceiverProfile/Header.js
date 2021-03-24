import React from "react";
import "../DonorProfile/Header.scss";
import EditIcon from "@material-ui/icons/Edit";
import { withStyles } from "@material-ui/core/styles";

// withstyles method to style the Icon MUI react componect and assign a new name to it (StyledIconEdit)
const StyledIconEdit = withStyles({
  root: {
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(EditIcon);

// Header component
export default function Header(props) {
  return (
    <div>
      <div className="profile-header">
        <img alt="avatar" src={props.avatar}></img>
        <h1 className="profile-greeting">{props.username}'s Profile</h1>
      </div>
      <div className="profile-description">
        <p>
          Disrupt inspire and think tank, social entrepreneur but preliminary
          thinking think tank compelling. Inspiring, invest synergy capacity
          building, white paper; silo, unprecedented challenge B-corp
          problem-solvers. Preliminary thinking, indicators entrepreneur, mass
          incarceration; grit we must stand up agile policymaker
          citizen-centered.
        </p>
        <div className="receiver-read-more">
          <StyledIconEdit />
          <a className="receiver-link-more">Edit profile</a>
        </div>
      </div>
    </div>
  );
}
