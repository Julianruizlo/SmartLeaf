import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Garden from "./components/Garden";
import Calendar from "./components/Calendar";
import CameraScanner from "./components/CameraScanner";
import PlantLibrary from "./components/PlantLibrary";
import PlantConsultantAI from "./components/PlantConsultantAI";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/huerta">Mi Huerta</Link></li>
            <li><Link to="/calendario">Calendario</Link></li>
            <li><Link to="/camara">Cámara</Link></li>
            <li><Link to="/biblioteca">Biblioteca</Link></li>
            <li><Link to="/consultor">Consultor IA</Link></li>
          </ul>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/huerta" element={<Garden />} />
            <Route path="/calendario" element={<Calendar />} />
            <Route path="/camara" element={<CameraScanner />} />
            <Route path="/biblioteca" element={<PlantLibrary />} />
            <Route path="/consultor" element={<PlantConsultantAI />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

