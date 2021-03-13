import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import HomePage from "./components/Homepage/Homepage";
// import Dashboard from "./components/Dashboard/Dashboard";
// import DonorProfile from "./components/DonorProfile/DonorProfile";
import ReceiverProfile from "./components/ReceiverProfile/ReceiverProfile";

//homepage
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HomePage />
      <Dashboard />
      <DonorProfile /> */}
      <ReceiverProfile />
      <Footer />
    </div>
  );
}

export default App;
