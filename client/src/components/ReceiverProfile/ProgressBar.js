import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import "./ProgressBar.scss";
import { Grid } from "@material-ui/core";
import ProgressBar from "react-bootstrap/ProgressBar";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 30,
    width: "60%",
    // borderRadius: 5,
    // color: "#ffffff",
  },
  colorPrimary: {
    backgroundColor: "#f0efec",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#0E212F",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CustomProgressBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br />
      <BorderLinearProgress variant="determinate" value={30} />
      <ProgressBar className="progress-bar" label="60%" />
      <div className="donations-receiver-button">
        <Button variant="contained">Edit</Button>
        <Button variant="contained">Add</Button>
      </div>
    </div>
  );
}
