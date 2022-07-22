import "./App.css";
import React from "react";
import Bashhub from "./pages/Bashhub";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import SpacesPage from "./pages/Spaces/SpacesPage";

function App() {
  return (
    <>
   
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/space" element={<SpacesPage />} />
            <Route path="/hub" element={<Bashhub />} />
          </Routes>
        </Router>

    </>
  );
}

export default App;
