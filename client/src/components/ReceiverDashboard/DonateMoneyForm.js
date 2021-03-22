import { React, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import jwt_decode from "jwt-decode";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import CardForm from "./CardForm";
import "./Wishlist.scss";
import "./ProgressBar.scss";
import "./CardStyling.scss";

// load stripe by using key in the env file
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// makestyles method to style the whole donateMoneyForm section
const useStyles = makeStyles({
  root: {
    backgroundColor: "#f0efec",
    fontFamily: "'Hind Madurai', sans-serif",
    minWidth: "500px",
  },
  dialogBox: {
    maxWidth: "900px",
  },
});

// DonateMoneyForm component
export default function DonateMoneyForm(props) {
  // States used in the DonateMoneyForm component
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const params = useParams();
  const [userId] = useState(Number(params.id));
  const [formData] = useState({
    user_id: 0,
    donation_date: new Date(),
    donated_amount: 0,
    requested_money_id: 0,
  });
  const [amountEntered, setAmountEntered] = useState();
  const history = useHistory();

  // show donatemoneyform when donate button clicked
  const handleClickOpen = () => {
    // allow user to donate only if logged in, if not then user is directed to
    if ("token" in localStorage) {
      setOpen(true);
      setAmountEntered();
    } else {
      history.push(`/login`);
    }
  };

  // Function to close the donatemoneyform when invoked
  const handleClose = () => {
    setOpen(false);
  };

  // Async function to be evoked when donate button is clicked in DonateMoneyForm
  async function handleSubmit() {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    // if no quantity is entered user is alerted to do so
    if (!amountEntered) {
      alert("Please the missing feilds in form");
    } else {
      // Axios POST call to add a donation and get summed to the total money donated to the user (receiver)
      const res = await axios.post(
        `/api/donations/donor/${decoded.userId}/new`,
        {
          ...formData,
          user_id: decoded.userId,
          donation_date: new Date(),
          donated_amount: amountEntered,
          requested_money_id: props.requested_money_id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      props.addNewDonation(res.data, props.id);
      handleClose();
    }
  }

  // handling amount input by user to receive data of amount to be donated
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
