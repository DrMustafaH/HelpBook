import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./Register.scss";

// makestyles method to style the whole ScheduledVolunteering section
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      background: "#f0efec",
    },
  },
  input: {
    paddingLeft: 10,
  },
}));

// Register component
export default function Register() {
  const classes = useStyles();

  return (
    <div className="registration-section">
      <div>
        <h1 className="registration-heading">Registration</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <div className="registration-form">
            <TextField
              required
              id="standard-required"
              label="Username"
              placeholder="Username"
              type="text"
              InputProps={{
                className: classes.input,
              }}
            />
            <TextField
              required
              id="standard-required"
              label="Email"
              placeholder="Email"
              type="email"
              InputProps={{
                className: classes.input,
              }}
            />
            <TextField
              required
              id="standard-required"
              label="Passsword"
              placeholder="Password"
              type="password"
              InputProps={{
                className: classes.input,
              }}
            />
            <p>I am registering as:</p>
            <div>
              <Button className="user-type-registration" variant="contained">
                Organization
              </Button>
              <Button className="user-type-registration" variant="contained">
                Individual
              </Button>
            </div>
          </div>
        </form>
        <a href="/login" className="no-account-mssg">
          Already have an account? Sign in
        </a>
      </div>
      <Button variant="contained">Register</Button>
    </div>
  );
}
