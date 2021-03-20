import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import DonateMoneyForm from "./DonateMoneyForm";
import "./ProgressBar.scss";

// withstyles method to style the LinearProgress MUI react componect and assign a new name to it (BorderLinearProgress)
const BorderLinearProgress = withStyles(() => ({
  root: {
    height: 30,
    // width: "auto",
    // maxWidth: "1065px",
    // margin: "0 50px",
  },
  colorPrimary: {
    backgroundColor: "#f0efec",
  },
  bar: {
    borderRadius: 15,
    backgroundColor: "#0E212F",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

// ProgressBar component
export default function ProgressBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h3>
          Current donations: ${props.sum} / Goal: ${props.requested_amount}
        </h3>
        <BorderLinearProgress
          variant="determinate"
          value={(props.sum / props.requested_amount) * 100}
        />
      </div>
      <DonateMoneyForm
        requested_money_id={props.requested_money_id}
        addNewDonation={props.addNewDonation}
      />
    </div>
  );
}
