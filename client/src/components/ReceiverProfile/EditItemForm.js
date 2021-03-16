import { React, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { DialogTitle, MenuItem, withStyles } from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import "./Wishlist.scss";

// const [userId] = useState(Number(params.id));
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

const StyledIconEdit = withStyles({
  root: {
    marginLeft: 20,
    "&:hover": {
      color: "#3891A6",
      cursor: "pointer",
    },
  },
})(EditIcon);

export default function EditItemForm(props) {
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
  };
  const handleClose = () => {
    setOpen(false);
  };

  // // Axios call when creating new wishilist item
  async function handleSubmit(event) {
    // event.preventDefault();
    if (!formData.itemName || !formData.quantity) {
      alert("Please fill missing form");
    } else {
      //Send new item to api
      const res = await axios.post(`/api/wishlist/${params.id}/edit`, {
        ...formData,
        id: props.id,
      });
      props.editWishlistItem(res.data, props.id);
      console.log("client res", res.data);
      handleClose();
    }
  }

  // handling form inputs to receive data of new wishlist item
  const handleInputName = (e) => {
    setFormData({ ...formData, itemName: e.target.value });
  };
  const handleInputQuantity = (e) => {
    // add form validation here
    setFormData({ ...formData, quantity: Number(e.target.value) });
  };
  const handleInputCategory = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

  return (
    <svg className="edit-item-form">
      <StyledIconEdit onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Your Item</DialogTitle>
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
              // helperText="All fields are mandatory"
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
    </svg>
  );
}
