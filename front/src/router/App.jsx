import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Garden from "../components/Garden.jsx";
import Calendar from "../components/Calendar.jsx";
import CameraScanner from "../components/CameraScanner.jsx";
import PlantsLibrary from "../components/PlantsLibrary.jsx";
import PlantConsultantAI from "../components/PlantConsultantAI.jsx";
import BottomNav from "../components/BottomNav.jsx";

import "../router/App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/huerta" element={<Garden />} />
        <Route path="/calendario" element={<Calendar />} />
        <Route path="/camara" element={<CameraScanner />} />
        <Route path="/biblioteca" element={<PlantsLibrary />} />
        <Route path="/consultor" element={<PlantConsultantAI />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomNav/>
    </Router>
  );
}

export default App;

