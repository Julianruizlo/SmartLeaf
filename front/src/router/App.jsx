import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Garden from "../components/Garden.jsx";
import Calendar from "../components/Calendar.jsx";
import CameraScanner from "../components/CameraScanner.jsx";
import PlantsLibrary from "../components/PlantsLibrary.jsx";
import PlantConsultantAI from "../components/PlantConsultantAi.jsx";
import Perfil from "../components/Perfil.jsx";
import Settings from "../components/Settings.jsx";
import Jardin from "../assets/jardin.jpg";
import Login from "../pages/Login.jsx";
import Registro from "../pages/Register.jsx";
import Recuperacion from "../components/Recuperacion.jsx";
import BottomNav from "../components/BottomNav.jsx"

import "../router/App.css";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/huerta" element={<Garden />} />
            <Route path="/calendario" element={<Calendar />} />
            <Route path="/camara" element={<CameraScanner />} />
            <Route path="/biblioteca" element={<PlantsLibrary />} />
            <Route path="/consultor" element={<PlantConsultantAI />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/jardin" element={<img src={Jardin} alt="jardin" />} />
            <Route path="/registrar" element={<Registro />} />
            <Route path="/recuperacion" element={<Recuperacion />} />
      </Routes>
      <BottomNav/>
    </Router>
  );
}

export default App;

