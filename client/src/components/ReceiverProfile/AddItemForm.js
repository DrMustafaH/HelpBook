import { React, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DialogTitle, MenuItem, withStyles } from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

// categories to map on for the select menu in the add item form
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

// withstyles method to style the AddCircleIcon MUI react componect and assign a new name to it (StyledAddIcon)
const StyledAddIcon = withStyles({
  root: {
    fontSize: "40px",
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(AddCircleIcon);

// AddItemForm component
export default function AddItemForm(props) {
  // States used in the AddItemForm component
  const [open, setOpen] = useState(false);
  const params = useParams();
  const [formData, setFormData] = useState({
    itemName: "",
    quantity: 1,
    category: 8,
  });

  // Open and close form when adding a new wishlist item
  const handleClickOpen = () => {
    setOpen(true);
    setFormData({ itemName: "", quantity: 1, category: 8 });
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Async function to be evoked when add button is clicked in items wishlist
  async function handleSubmit() {
    // if no quantity is entered user is alerted to do so
    if (!formData.itemName || !formData.quantity) {
      alert("Please the missing feilds in form");
    } else {
      // Axios POST call using Token to add a wishlist item to the user's (receiver) list by using specific user id in params
      const res = await axios.post(
        `/api/wishlist/${params.id}/add`,
        {
          ...formData,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      props.addNewWishlist(res.data);
      handleClose();
    }
  }

  // handling form inputs to receive data of new wishlist item
  const handleInputName = (e) => {
    setFormData({ ...formData, itemName: e.target.value });
  };

  const handleInputQuantity = (e) => {
    setFormData({ ...formData, quantity: Number(e.target.value) });
  };

  const handleInputCategory = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

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
          <form required autoComplete="off">
            <TextField
              // autoFocus
              required
              margin="dense"
              id="name"
              label="Item Name"
              type="text"
              fullWidth
              value={formData.itemName}
              onChange={handleInputName}
            />
            <TextField
              id="standard-nubmer"
              label="Quantity"
              placeholder="Quantity"
              type="number"
              fullWidth
              InputProps={{ inputProps: { min: 1, max: 50 } }}
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.quantity}
              onChange={handleInputQuantity}
            />
            <br />
            <TextField
              id="standard-select-category"
              select
              label="Category"
              fullWidth
              value={formData.category}
              onChange={handleInputCategory}
            >
              {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
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
