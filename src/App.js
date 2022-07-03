import "./App.css";
import Bashhub from "./pages/Bashhub";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Mobilemenu from "./components/MobileMenu/Mobilemenu";

function App() {
  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hub" element={<Bashhub/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
