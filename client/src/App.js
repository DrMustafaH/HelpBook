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
import ReceiverDashboard from "./components/ReceiverDashboard/ReceiverDashboard";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";

// App component
function App() {
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [userType, setUserType] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

  // handle login when clicked to store token in localstorage and to set token value to token
  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setToken(localStorage.getItem("token"));
  };

  // handle logout when clicked to clear the localstorage and to set token value to null
  const handleLogout = () => {
    localStorage.clear();
    setToken(null);
  };

  // useEffect to be evoked everytime app refreshed to retrieve categories data from local api and set it to state
  useEffect(() => {
    axios.get("/api/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  // useEffect to be evoked everytime app refreshed to retrieve users data from local api and set it to state
  useEffect(() => {
    axios.get("/api/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  // useEffect to be evoked everytime app refreshed to retrieve user types data from local api and set it to state
  useEffect(() => {
    axios.get("/api/types").then((res) => {
      setUserType(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={token} logout={handleLogout} />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard
              users={users}
              userType={userType}
              categories={categories}
            />
          </Route>
          <Route exact path="/receiver/:id">
            <ReceiverProfile />
          </Route>
          <Route exact path="/receiverDash/:id">
            <ReceiverDashboard />
          </Route>
          <Route exact path="/donor/:id">
            <DonorProfile />
          </Route>
          <Route exact path="/login">
            <Login setToken={handleLogin} />
          </Route>
          <Route exact path="/register">
            <Register />
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
