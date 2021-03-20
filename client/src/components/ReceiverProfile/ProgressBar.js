import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import EditAmountForm from "./EditAmountForm";
import AddAmountForm from "./AddAmountForm";
import "./ProgressBar.scss";

// withstyles method to style the Icon MUI react componect and assign a new name to it (StyledIconEdit)
const BorderLinearProgress = withStyles(() => ({
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

// makestyles method to style the whole progress bar section
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

// ProgressBar component
export default function ProgressBar() {
  // States used in the ProgressBar component
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

  //Render the new goal amount after completing the older one
  const GetNewAmount = (newAmount) => {
    setTotalDonation({ ...totalDonation, requested_amount: newAmount, sum: 0 });
  };

  // A useEffect that activates on every time the userId state (in the params) changes to get the total donations made by using the userId by an axios GET call
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
        {totalDonation.requested_amount != 0 && (
          <EditAmountForm
            disabled={totalDonation.requested_amount == totalDonation.sum}
            requested_amount={totalDonation.requested_amount}
            id={totalDonation.id}
            onEdit={GetEditedAmount}
          />
        )}
        <AddAmountForm
          disabled={totalDonation.requested_amount != totalDonation.sum}
          requested_amount={totalDonation.requested_amount}
          sum={totalDonation.sum}
          id={totalDonation.id}
          onAdd={GetNewAmount}
        />
      </div>
    </div>
  );
}
