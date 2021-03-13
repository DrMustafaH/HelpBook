import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import HomePage from "./components/Homepage/Homepage";
import Dashboard from "./components/Dashboard/Dashboard";

//homepage
// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <HomePage />
//       <Footer />
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
