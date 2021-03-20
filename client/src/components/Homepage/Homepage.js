import React from "react";
import LandingSection from "./LandingSection";
import AboutUs from "./AboutUs";
import Information from "./Information";
import HowToHelp from "./HowToHelp";

// Homepage component
export default function HomePage() {
  return (
    <div>
      <LandingSection />
      <AboutUs />
      <HowToHelp />
      <Information />
    </div>
  );
}
