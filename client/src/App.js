import { React, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/Homepage/Homepage";
import Dashboard from "./components/Dashboard/Dashboard";
import DonorProfile from "./components/DonorProfile/DonorProfile";
import ReceiverProfile from "./components/ReceiverProfile/ReceiverProfile";
import { Router, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Health",
  },
  {
    id: 2,
    name: "Food Banks",
  },
  {
    id: 3,
    name: "Immigration & Refugees",
  },
  {
    id: 4,
    name: "Education",
  },
  {
    id: 5,
    name: "Animals",
  },
  {
    id: 6,
    name: "Kids",
  },
  {
    id: 7,
    name: "Women",
  },
  {
    id: 8,
    name: "Others",
  },
];
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
  //   const [state, setState] = useState({
  //     users: {},
  //     categories: {"Health"}
  //   wishlist: {},
  //   usertype: {},
  //   donations_donor: {},
  //   donations_receiver: {},
  //   });
  // const setCategory = (category) => {}
  // useEffect(() => {
  //   Promise.all([
  //     axios.get("/api/users"),
  //     axios.get("/api/categories"),
  //     axios.get("/api/wishlist"),
  //     axios.get("/api/usertype"),
  //     axios.get("/api/donations/donor"),
  //     axios.get("/api/donations/receiver"),
  //   ]).then((all) => {
  //     setState((prev) => ({
  //       ...prev,
  //       users: all[0].data,
  //       categories: all[1].data,
  //       wishlist: all[2].data,
  //       usertype: all[3].data,
  //       donations_donor: all[4].data,
  //       donations_receiver: all[5].data,
  //     }));
  //   });
  // }, []);
  // console.log("THIS IS STATE", state.categories);
  return (
    <div className="App">
      <BrowserRouter>
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
          <Route path="/donor">
            <DonorProfile />
          </Route>
          <Route path="/*">
            <div>NOT FOUND</div>
          </Route>
        </Switch>

        {/* <ReceiverProfile />  */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
