import React, { useEffect, useState } from "react";
import "./Login.scss";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

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
  const params = useParams();
  const [userId] = useState(Number(params.id));
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();
    if (!userInfo.username || !userInfo.password) {
      alert("Please fill missing form");
    } else {
      // console.log("USERINFO username", userInfo.username);
      // console.log("USERINFO", userInfo);
      const res = await axios.post(`api/users/fetchUser`, {
        username: userInfo.username,
        password: userInfo.password,
      });
      // console.log("RES DATA",res.data);
      async function getLoginToken() {
        const res2 = await axios.post(`/login/${res.data.id}`);
        console.log(res2.data);
        const token = res2.data;
        localStorage.setItem("token", token.token);
      }
      getLoginToken();
      if (res.data.type_id == 1) {
        history.push(`/donor/${res.data.id}`);
      } else {
        history.push(`/receiver/${res.data.id}`);
      }
    }
  }

  // handleClose();

  // handling form inputs to receive data of user by username
  const handleInputUsername = (e) => {
    setUserInfo({ ...userInfo, username: e.target.value });
  };

  // handling form inputs to receive data of user by password
  const handleInputPassword = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

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
              value={userInfo.username}
              onChange={handleInputUsername}
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
              value={userInfo.password}
              onChange={handleInputPassword}
            />
          </div>
        </form>
        <a className="no-account-mssg">
          Don't have an account yet? Register here
        </a>
      </div>
      <Button variant="contained" onClick={handleSubmit}>
        Login
      </Button>
    </div>
  );
}
