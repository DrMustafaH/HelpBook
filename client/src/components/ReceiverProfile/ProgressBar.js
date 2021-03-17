import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import "./ProgressBar.scss";
import EditAmountForm from "./EditAmountForm";
import axios from "axios";
import { useParams } from "react-router-dom";

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
  const params = useParams();
  const [userId] = useState(Number(params.id));
  const [totalDonation, setTotalDonation] = useState({
    id: 0,
    is_active: false,
    requested_amount: 0,
    requested_money_id: 0,
    sum: 0,
    user_id: 0,
  });

  //Render the updated goal amount after editing it
  const GetEditedAmount = (newAmount) => {
    setTotalDonation({ ...totalDonation, requested_amount: newAmount });
  };

  useEffect(() => {
    async function getTotalDonations() {
      const res = await axios.get(`/api/users/total_donation/${userId}`);
      setTotalDonation(res.data);
    }
    getTotalDonations();
  }, [userId]);

  return (
    <div className={classes.root}>
      <div>
        <h3>
          Current donations: ${totalDonation.sum} / Goal: $
          {totalDonation.requested_amount}
        </h3>
        <BorderLinearProgress
          variant="determinate"
          value={(totalDonation.sum / totalDonation.requested_amount) * 100}
        />
      </div>
      <div className="donations-receiver-button">
        <EditAmountForm
          disabled={totalDonation.requested_amount == totalDonation.sum}
          requested_amount={totalDonation.requested_amount}
          id={totalDonation.id}
          onEdit={GetEditedAmount}
        />
        <Button
          variant="contained"
          disabled={totalDonation.requested_amount != totalDonation.sum}
        >
          Add New Goal
        </Button>
      </div>
    </div>
  );
}
