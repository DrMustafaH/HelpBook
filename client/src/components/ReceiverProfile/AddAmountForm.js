import { React, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { DialogTitle } from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Wishlist.scss";
import "./ProgressBar.scss";

export default function AddAmountForm(props) {
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

  // Axios call to edit donation amount
  async function handleSubmit(event) {
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

  // handling form inputs to receive data of new donation
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
