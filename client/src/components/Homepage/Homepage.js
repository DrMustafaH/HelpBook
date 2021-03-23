import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import LandingSection from "./LandingSection";
import AboutUs from "./AboutUs";
import Information from "./Information";
import HowToHelp from "./HowToHelp";
import "./Homepage.scss";

// Homepage component
export default function HomePage() {
  return (
    <div>
      <LandingSection />
      <div className="homepage-links-section">
        <Router>
          <Link to="/about" className="information-links">
            About Us
          </Link>
          <Link to="/howToHelp" className="information-links">
            How To Help
          </Link>
          <Link to="/information" className="information-links">
            + Information
          </Link>
          <Switch>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/howToHelp">
              <HowToHelp />
            </Route>
            <Route path="/information">
              <Information />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
