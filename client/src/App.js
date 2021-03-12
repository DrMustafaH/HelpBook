import "./App.css";
import Navbar from "./components/Navbar";
import LandingSection from "./components/Homepage/LandingSection";
import AboutUs from "./components/Homepage/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingSection />
      <AboutUs />
    </div>
  );
}

export default App;
