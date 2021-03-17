import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import "./ProgressBar.scss";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 30,
    width: "auto",
    maxWidth: "1065px",
    margin: "0 50px",
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
      <div className="donations-receiver-button">
        <Button
          variant="contained"
          disabled={props.requested_amount == props.sum}
        >
          Edit Amount
        </Button>

        <Button
          variant="contained"
          disabled={props.requested_amount != props.sum}
        >
          Add New Goal
        </Button>
      </div>
    </div>
  );
}
