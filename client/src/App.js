import { React, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/Homepage/Homepage";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DonorProfile from "./components/DonorProfile/DonorProfile";
import ReceiverProfile from "./components/ReceiverProfile/ReceiverProfile";

const users = [
  {
    id: 1,
    username: "helloWorld",
    email: "hello@world.com",
    password: "helloworld",
    type_id: 1,
    avatar:
      "https://avatars.dicebear.com/v2/female/f3f1f083c911e25d5350659901780358.svg",
    category_id: 2,
  },
  {
    id: 2,
    username: "World Heath Organization",
    email: "who@example.com",
    password: "password",
    type_id: 2,
    avatar:
      "https://gravatar.com/avatar/f3f1f083c911e25d5350659901780358?s=400&d=robohash&r=x",
    category_id: null,
  },
  {
    id: 3,
    username: "share food bank",
    email: "sfb@example.com",
    password: "password",
    type_id: 2,
    avatar:
      "https://gravatar.com/avatar/f3f1f083c911e25d5350659901780358?s=400&d=retro&r=x",
    category_id: null,
  },
  {
    id: 4,
    username: "JoeD",
    email: "joe@example.com",
    password: "password",
    type_id: 1,
    avatar:
      "https://gravatar.com/avatar/f3f1f083c911e25d5350659901780358?s=400&d=monsterid&r=x",
    category_id: null,
  },
  {
    id: 5,
    username: "MrDave",
    email: "dave@example.com",
    password: "password",
    type_id: 3,
    avatar:
      "https://gravatar.com/avatar/f3f1f083c911e25d5350659901780358?s=400&d=retro&r=x",
    category_id: 1,
  },
];
const usertype = [
  {
    id: 1,
    name: "donor",
  },
  {
    id: 2,
    name: "receiver_organization",
  },
  {
    id: 3,
    name: "receiver_individual",
  },
];

//homepage
function App() {
  // Retreive categories data from local api and set it with useState
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("/api/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard
              users={users}
              usertype={usertype}
              categories={categories}
            />
          </Route>
          <Route exact path="/receiver">
            <ReceiverProfile />
          </Route>
          <Route exact path="/donor">
            <DonorProfile />
          </Route>
          <Route exact path="/*">
            <h1>PAGE NOT FOUND</h1>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
