import { React, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  DialogTitle,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import "./Wishlist.scss";

// withstyles method to style the Button MUI react componect and assign a new name to it (StyledButton)
const StyledButton = withStyles({
  root: {
    paddingLeft: 10,
    borderRadius: 22,
    padding: "0 8px 0 0",
    marginTop: 4,
    fontFamily: "'Hind Madurai', sans-serif",
    "&:hover": {
      backgroundColor: "#0E212F",
      color: "#f0efec",
      cursor: "pointer",
      fontWeight: "700",
    },
  },
})(Button);

// makestyles method to style the whole donateItemForm section
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#f0efec",
  },
  typography: {
    fontFamily: "'Hind Madurai', sans-serif",
  },
  terms: {
    padding: "0 20px 0 20px",
  },
});

// DonateItemForm component
export default function DonatedItemForm(props) {
  // States used in the DonateItemForm component
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    quantity: props.quantity,
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const history = useHistory();

  // function to control the acceptTerms tick box to be ticked or not on click by altering state
  const onSelect = () => {
    acceptTerms ? setAcceptTerms(false) : setAcceptTerms(true);
  };

  // show donateitemform when donate button clicked
  const handleClickOpen = () => {
    // allow user to donate only if logged in, if not then user is directed to
    if ("token" in localStorage) {
      setOpen(true);
      setAcceptTerms(false);
      setFormData({ quantity: props.quantity });
    } else {
      history.push(`/login`);
    }
  };

  // Function to close the donateItemForm when invoked
  const handleClose = () => {
    setOpen(false);
  };

  // Function to close the donateItemForm when submitted and if no quantity is entered user is alerted to do so
  const handleSubmit = () => {
    if (!formData.quantity) {
      alert("Please the missing feilds in form");
    } else {
      handleClose();
    }
  };

  // Function to take the inputed quantity by user
  const handleInputQuantity = (e) => {
    setFormData({ ...formData, quantity: Number(e.target.value) });
  };

  return (
    <div>
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
                    className={classes.typography}
                    color="textSecondary"
                    gutterBottom
                  >
                    Please Read
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.typography}
                  >
                    Drop-off Instructions
                  </Typography>
                  <br />
                  <br />
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.typography}
                  >
                    Please drop the items donated to the our office address as
                    shown in the map below:
                    <br />
                    <iframe
                      title="map"
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
                <CardActions className={classes.terms}>
                  <td>
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onClick={onSelect}
                    />
                  </td>
                  <Typography className={classes.typography}>
                    I Accept the terms.
                  </Typography>
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
