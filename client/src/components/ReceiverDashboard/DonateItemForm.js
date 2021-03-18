import { React, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import {
  Card,
  CardActions,
  CardContent,
  DialogTitle,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Wishlist.scss";

const StyledButton = withStyles({
  root: {
    paddingLeft: 10,
    borderRadius: 22,
    padding: "0 8px 0 0",
    marginTop: 4,
    "&:hover": {
      backgroundColor: "#0E212F",
      color: "#f0efec",
      cursor: "pointer",
      fontWeight: "700",
    },
  },
})(Button);

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function EditItemForm(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const params = useParams();
  const [formData, setFormData] = useState({
    quantity: props.quantity,
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const onSelect = () => {
    acceptTerms ? setAcceptTerms(false) : setAcceptTerms(true);
  };

  // Open and close form when adding a new wishlist item
  const handleClickOpen = () => {
    setOpen(true);
    setAcceptTerms(false);
    setFormData({ quantity: props.quantity });
  };
  const handleClose = () => {
    setOpen(false);
  };

  // // Axios call when creating new wishilist item
  async function handleSubmit(event) {
    // event.preventDefault();
    if (!formData.quantity) {
      alert("Please fill missing form");
    } else {
      //Send new item to api
      // const res = await axios.post(`/api/wishlist/${params.id}/edit`, {
      //   ...formData,
      //   id: props.id,
      // });
      // props.editWishlistItem(res.data, props.id);
      handleClose();
    }
  }

  // handling form inputs to receive data of new wishlist item
  const handleInputQuantity = (e) => {
    setFormData({ ...formData, quantity: Number(e.target.value) });
  };

  return (
    <div className="edit-item-form">
      <StyledButton variant="outlined" onClick={handleClickOpen}>
        Donate
      </StyledButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Donate Item</DialogTitle>
        <DialogContent>
          <form required autoComplete="off">
            <TextField
              required
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
            <br />
            <br />
            <br />
            <div>
              <Card className={classes.root}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Please Read
                  </Typography>
                  <Typography variant="h5" component="h2">
                    Drop-off Instructions
                  </Typography>
                  <br />
                  <br />
                  <Typography variant="body2" component="p">
                    Please drop the items donated to the our office address as
                    shown in the map below:
                    <br />
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10410.979079181036!2d-123.1149943!3d49.2812333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf2dfb0f48c8a056!2sLighthouse%20Labs!5e0!3m2!1sen!2sca!4v1616012208908!5m2!1sen!2sca"
                      width="auto"
                      height="auto"
                    ></iframe>
                    <br />
                    <br />
                    You should deliver items within 24 hours from transaction,
                    if not delivered this action will be reversed
                  </Typography>
                </CardContent>
                <CardActions>
                  <td>
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onClick={onSelect}
                    />
                  </td>
                  <Typography>I Accept Terms</Typography>
                </CardActions>
              </Card>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!acceptTerms}
            color="primary"
          >
            Donate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
