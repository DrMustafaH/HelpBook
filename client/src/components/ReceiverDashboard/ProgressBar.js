import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import DonateMoneyForm from "./DonateMoneyForm";
import "./ProgressBar.scss";

// withstyles method to style the LinearProgress MUI react componect and assign a new name to it (BorderLinearProgress)
const BorderLinearProgress = withStyles(() => ({
  root: {
    height: 30,
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
    width: "80%",
    marginBottom: "30px",
  },
});

// ProgressBar component
export default function ProgressBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <div className="total-donations">
          <div>
            <div>Current donations:</div>
            <h1>${props.sum}</h1>
          </div>
          <div>
            <div>Goal:</div>
            <h1>${props.requested_amount}</h1>
          </div>
        </div>
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
