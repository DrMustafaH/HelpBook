import { React, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DialogTitle } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import "./ProgressBar.scss";
import "./Wishlist.scss";

// EditAmountForm component
export default function EditAmountForm(props) {
  // States used in the EditAmountForm component
  const [open, setOpen] = useState(false);
  const params = useParams();
  const [formData, setFormData] = useState({
    requested_amount: props.requested_amount,
  });

  // Open and close form when editing donation amount
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Async function to be evoked when edit amount button is clicked in money donations progress bar section
  async function handleSubmit() {
    // Axios POST call using Token to edit amount goal of user (receiver) by using specific user id in params
    const res = await axios.post(
      `/api/donations/receiver/${params.id}/edit`,
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
    props.onEdit(res.data.requested_amount);
    handleClose();
  }

  // handling form inputs to receive data of edit donation amount goal
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
        Edit Amount
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Amount Wanted</DialogTitle>
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
