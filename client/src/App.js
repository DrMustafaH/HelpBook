import "./App.css";
import Navbar from "./components/Navbar";
import LandingSection from "./components/Homepage/LandingSection";
import AboutUs from "./components/Homepage/AboutUs";
import Information from "./components/Homepage/Information";
import HowToHelp from "./components/Homepage/HowToHelp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingSection />
      <AboutUs />
      <HowToHelp />
      <Information />
    </div>
  );
}

export default App;
