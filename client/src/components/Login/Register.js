import React from "react";
import "./Register.scss";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

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

export default function Register() {
  const classes = useStyles();
  return (
    <div className="registration-section">
      <div>
        <h1 className="registration-heading">Registration</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <div className="registration-form">
            {/* <span>Username: </span> */}
            <TextField
              // error
              required
              id="standard-required"
              label="Username"
              // defaultValue="Username"
              placeholder="Username"
              type="text"
              InputProps={{
                className: classes.input,
              }}
            />
            <TextField
              // error
              required
              id="standard-required"
              label="Email"
              // defaultValue="Username"
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
              // defaultValue="Password"
              placeholder="Password"
              type="password"
              InputProps={{
                className: classes.input,
              }}
            />
            <pan>I am registering as:</pan>
            <div>
              <Button className="user-type-registration" variant="contained">
                Organization
              </Button>
              <Button className="user-type-registration" variant="contained">
                Individual
              </Button>
            </div>
            {/* <TextField
              // error
              required
              id="standard-required"
              label="Organization Name"
              // defaultValue="Username"
              placeholder="Organization Name"
              type="text"
              InputProps={{
                className: classes.input,
              }}
            /> */}
          </div>
        </form>
        <a className="no-account-mssg">Already have an account? Login here</a>
      </div>
      <Button variant="contained">Register</Button>
    </div>
  );
}
