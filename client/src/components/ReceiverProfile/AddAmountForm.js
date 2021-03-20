import { React, useState } from "react";
import { DialogTitle } from "@material-ui/core";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import "./Wishlist.scss";
import "./ProgressBar.scss";

// AddAmountForm component
export default function AddAmountForm(props) {
  // States used in the AddAmountForm component
  const [open, setOpen] = useState(false);
  const params = useParams();
  const [formData, setFormData] = useState({
    sum: props.sum,
    requested_amount: props.requested_amount,
  });

  // Open and close form when adding a new goal amount
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //Async function that uses Token and accordingly makes an axios POST call to set a donation goal to the user depending on the user id taken from params
  async function handleSubmit() {
    const res = await axios.post(
      `/api/donations/receiver/${params.id}/add`,
      {
        ...formData,
        id: props.id,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    props.onAdd(res.data.requested_amount);
    handleClose();
  }

  // handling form inputs by user to receive data of new donation goal
  const handleInputNumber = (e) => {
    setFormData({ ...formData, requested_amount: e.target.value });
  };

  return (
    <div className="edit-amount-form">
      <Button
        className="donations-receiver-button"
        variant="contained"
        disabled={props.disabled}
        onClick={handleClickOpen}
      >
        Add Amount
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Amount Wanted</DialogTitle>
        <DialogContent>
          <form required autoComplete="off">
            <TextField
              // autoFocus
              required
              margin="dense"
              id="name"
              label="Donation"
              type="number"
              fullWidth
              value={formData.requested_amount}
              onChange={handleInputNumber}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
