import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Login.scss";

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

// Login component
export default function Login(props) {
  // States used in the Login component
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();
  const classes = useStyles();

  //Async function that on clicking the login button to perform several axios calls
  async function handleSubmit(event) {
    event.preventDefault();
    // Form validation if nothing is entered in login feilds it will alert user to fill it
    if (!userInfo.username || !userInfo.password) {
      alert("Please the missing feilds in form");
    } else {
      // Axios POST call to fetch a specific user from users database using username and password entered in login form
      const res = await axios.post(`api/users/fetchUser`, {
        username: userInfo.username,
        password: userInfo.password,
      });
      // Async function that issues a token to the logged in user using an axios POST call and store token in localStorage
      async function getLoginToken() {
        const res2 = await axios.post(`/login/${res.data.id}`);
        const { token } = res2.data;
        props.setToken(token);
      }
      getLoginToken();
      // Condition to route the user according the type_id of the user
      if (res.data.type_id == 1) {
        history.push(`/donor/${res.data.id}`);
      } else {
        history.push(`/receiver/${res.data.id}`);
      }
    }
  }

  // function to handle form inputs to receive data of user by username
  const handleInputUsername = (e) => {
    setUserInfo({ ...userInfo, username: e.target.value });
  };

  // function to handle form inputs to receive data of user by password
  const handleInputPassword = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  return (
    <div className="login-section">
      <div>
        <h1 className="login-heading">Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              required
              id="standard-required"
              label="Username"
              placeholder="Username"
              type="text"
              InputProps={{
                className: classes.input,
              }}
              value={userInfo.username}
              onChange={handleInputUsername}
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
              value={userInfo.password}
              onChange={handleInputPassword}
            />
          </div>
        </form>
        <a href="/register" className="no-account-mssg">
          New user? Create an account
        </a>
      </div>
      <Button variant="contained" onClick={handleSubmit}>
        Login
      </Button>
    </div>
  );
}
