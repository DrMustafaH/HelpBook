import React from "react";
import "./Login.scss";
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

export default function Login() {
  const classes = useStyles();
  return (
    <div className="login-section">
      <div>
        <h1 className="login-heading">Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
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
          </div>
        </form>
        <a className="no-account-mssg">
          Don't have an account yet? Register here
        </a>
      </div>
      <Button variant="contained">Login</Button>
    </div>
  );
}
