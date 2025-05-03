import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Garden from "./components/Garden.jsx";
import Calendar from "./components/Calendar.jsx";
import CameraScanner from "./components/CameraScanner.jsx";
import PlantsLibrary from "./components/PlantsLibrary.jsx";
import PlantConsultantAI from "./components/PlantConsultantAi.jsx";
import Pruebas from "./components/Pruebas.jsx";
import Perfil from "./components/Perfil.jsx";
import Settings from "./components/Settings.jsx";
import Jardin from "./assets/jardin.jpg";
import Login from "./pages/Login.jsx";
import PlantIdentifier from "./components/PlantIdentifier.jsx";

import { getToken } from "./utils/token"; // Asegurate de tener este archivo

import "./App.css";

function PrivateRoute({ element }) {
  const token = getToken();
  return token ? element : <Navigate to="/" />;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getToken();
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <div className="content">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route path="/huerta" element={<PrivateRoute element={<Garden />} />} />
          <Route path="/calendario" element={<PrivateRoute element={<Calendar />} />} />
          <Route path="/camara" element={<PrivateRoute element={<PlantIdentifier />} />} />
          <Route path="/biblioteca" element={<PrivateRoute element={<PlantsLibrary />} />} />
          <Route path="/consultor" element={<PrivateRoute element={<PlantConsultantAI />} />} />
          <Route path="/pruebas" element={<PrivateRoute element={<Pruebas />} />} />
          <Route path="/perfil" element={<PrivateRoute element={<Perfil />} />} />
          <Route path="/settings" element={<PrivateRoute element={<Settings />} />} />
          <Route path="/jardin" element={<PrivateRoute element={<img src={Jardin} alt="jardin" />} />} />
          <Route path="/identificador" element={<PrivateRoute element={<PlantIdentifier />} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
