import "./App.css";
import Navbar from "./components/Navbar";
import LandingSection from "./components/Homepage/LandingSection";
import AboutUs from "./components/Homepage/AboutUs";
import Information from "./components/Homepage/Information";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingSection />
      <AboutUs />
      <Information />
    </div>
  );
}

export default App;
