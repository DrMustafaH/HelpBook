import { React, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import HomePage from "./components/Homepage/Homepage";
import Dashboard from "./components/Dashboard/Dashboard";
// import DonorProfile from "./components/DonorProfile/DonorProfile";
// import ReceiverProfile from "./components/ReceiverProfile/ReceiverProfile";

//homepage
function App() {
  useEffect(() => {
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/categories"),
      // axios.get("/api/interviewers"),
    ]).then((all) => {
      let res = {
        users: all[0].data,
        categories: all[1].data,
        // interviewers: all[2].data,
      };
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* <HomePage /> */}
      <Dashboard />
      {/* <DonorProfile />
      <ReceiverProfile /> */}
      <Footer />
    </div>
  );
}

export default App;
