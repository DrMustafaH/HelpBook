import { React, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { FormControl, MenuItem, withStyles } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import axios from "axios";

const categories = [
  { value: 1, label: "Health" },
  { value: 2, label: "Food Banks" },
  { value: 3, label: "Immigration & Refugees" },
  { value: 4, label: "Education" },
  { value: 5, label: "Animals" },
  { value: 6, label: "Kids" },
  { value: 7, label: "Women" },
  { value: 8, label: "Others" },
];

const StyledAddIcon = withStyles({
  root: {
    fontSize: "40px",
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(AddCircleIcon);

export default function AddItemForm() {
  const [open, setOpen] = useState(false);
  const [wishlist, setWishlist] = useState({
    wishlist: [],
  });

  function submit(event) {
    event.preventDefault();
    console.log("SUBMIT", event);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleInputName = (e) => {
  //   console.log("THIS is name", e.target.value);
  //   // setWishlist({
  //   //     [e.target.value]: e.target.value
  //   // });
  // };
  // const handleInputCategory = (e) => {
  //   console.log("THIS is category", e.target.value);
  //   // setWishlist({
  //   //     [e.target.value]: e.target.value
  //   // });
  // };
  // const handleInputQuantity = (e) => {
  //   console.log("THIS is quantity", e.target.value);
  //   // setWishlist({
  //   //     [e.target.value]: e.target.value
  //   // });
  // };
  // const [state, setState] = useState({
  //   day: "Monday",
  //   days: [],
  //   appointments: {},
  //   interviewers: {},
  // });

  // const onChange = () => {};

  // const bookInterview = (id, interview) => {
  //   const wishListItem = {
  //     ...wishlist.wishlist[id],
  //     interview: { ...interview },
  //   };

  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment,
  //   };

  //   const url = `/api/wishlist/${id}`;
  //   return axios.put(url, appointment).then(() => {
  //     const days = updateSpots(state.day, state.days, appointments);
  //     setState({ ...state, appointments, days });
  //   });
  // };

  return (
    <div>
      <StyledAddIcon className="add-wish-btn" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Add a New Wishlist Item
        </DialogTitle>
        <DialogContent>
          {/* <form required="true" autoComplete="off"> */}
          <TextField
            // autoFocus
            required
            // onSubmit={submit.bind(this)}
            margin="dense"
            id="name"
            label="Item Name"
            type="text"
            fullWidth
            // value={handleInputChange}
            // onChange={handleInputName}
          />
          <TextField
            id="standard-number"
            label="Quantity"
            placeholder="Quantity"
            type="number"
            fullWidth
            InputProps={{ inputProps: { min: 0, max: 50 } }}
            InputLabelProps={{
              shrink: true,
            }}
            // onChange={handleInputQuantity}
          />
          <br />
          <TextField
            id="standard-select-category"
            select
            label="Category"
            fullWidth
            value={8}
            // onChange={handleChange}
            // helperText="All fields are mandatory"
            // onChange={handleInputCategory}
          >
            {categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {/* </form> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
