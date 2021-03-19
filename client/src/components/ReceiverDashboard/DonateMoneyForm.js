import { React, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import {
  Card,
  CardContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CardForm from "./CardForm";
import { useHistory } from "react-router-dom";
import "./Wishlist.scss";
import "./ProgressBar.scss";
import "./CardStyling.scss";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f0efec",
    fontFamily: "'Hind Madurai', sans-serif",
    minWidth: "500px",
  },
  // bullet: {
  //   display: "inline-block",
  //   margin: "0 2px",
  //   transform: "scale(0.8)",
  // },
  // title: {
  //   fontSize: 14,
  // },
  // pos: {
  //   marginBottom: 12,
  // },
  dialogBox: {
    maxWidth: "900px",
  },
});

export default function DonateMoneyForm(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const params = useParams();
  const [userId] = useState(Number(params.id));
  const [formData, setFormData] = useState({
    user_id: 0,
    donation_date: new Date(),
    donated_amount: 0,
    requested_money_id: 0,
  });
  const [amountEntered, setAmountEntered] = useState();
  const history = useHistory();

  // Open and close form when adding a new wishlist item
  const handleClickOpen = () => {
    if ("token" in localStorage) {
      setOpen(true);
    } else {
      history.push(`/login`);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Axios call when a new amount is donated
  async function handleSubmit() {
    if (!amountEntered) {
      alert("Please fill missing form");
    } else {
      const res = await axios.post(`/api/donations/donor/${userId}/new`, {
        ...formData,
        user_id: userId,
        donation_date: new Date(),
        donated_amount: amountEntered,
        requested_money_id: props.requested_money_id,
      });
      props.addNewDonation(res.data, props.id);
      handleClose();
    }
  }

  // handling amount inputs to receive data of amount to be donated
  const handleInputAmount = (e) => {
    setAmountEntered(e.target.value);
  };

  return (
    <div>
      <div className="donations-receiver-button">
        <Button variant="contained" onClick={handleClickOpen}>
          Donate
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Donate Money</DialogTitle>
        <DialogContent className={classes.dialogBox}>
          <form required autoComplete="off">
            <TextField
              required
              id="standard-nubmer"
              label="Amount"
              placeholder="Amount"
              type="number"
              fullWidth
              InputProps={{ inputProps: { min: 1, max: 1000000 } }}
              InputLabelProps={{
                shrink: true,
              }}
              value={amountEntered}
              onChange={handleInputAmount}
            />
            <br />
            <br />
            <br />
            <br />
            <div>
              {amountEntered && (
                <Card className={classes.root}>
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      Payment Details
                    </Typography>
                    <br />
                    <br />
                    <div>
                      <Elements stripe={stripePromise}>
                        <CardForm handleSubmit={handleSubmit} />
                      </Elements>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
