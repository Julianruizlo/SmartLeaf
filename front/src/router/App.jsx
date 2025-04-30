import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";
import Garden from "../pages/Garden.jsx";
import Calendar from "../pages/Calendar.jsx";
import PlantIdentifier from "../components/PlantIdentifier.jsx";
import PlantsLibrary from "../pages/PlantsLibrary.jsx";
import PlantConsultantAI from "../pages/PlantConsultantAi.jsx";
import Profile from "../pages/Profile.jsx";
import Settings from "../pages/Settings.jsx";
import Jardin from "../assets/jardin.jpg";
import Login from "../pages/Login.jsx";
import Registro from "../pages/Register.jsx";
import Recuperacion from "../components/Recuperacion.jsx";
import BottomNav from "../components/BottomNav.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";

import "../models/App.css"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/huerta"
          element={
            <ProtectedRoute>
              <>
                <Garden />
                <BottomNav />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/calendario"
          element={
            <ProtectedRoute>
              <>
                <Calendar />
                <BottomNav />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/camara"
          element={
            <ProtectedRoute>
              <>
                <PlantIdentifier />
                <BottomNav />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/biblioteca"
          element={
            <ProtectedRoute>
              <>
                <PlantsLibrary />
                <BottomNav />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/consultor"
          element={
            <ProtectedRoute>
              <>
                <PlantConsultantAI />
                <BottomNav />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/perfil"
          element={
            <ProtectedRoute>
              <>
                <Profile />
                <BottomNav />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <>
                <Settings />
                <BottomNav />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/jardin"
          element={
            <ProtectedRoute>
              <>
                <img src={Jardin} alt="jardin" />
                <BottomNav />
              </>
            </ProtectedRoute>
          }
        />
        <Route path="/registrar" element={<Registro />} />
        <Route path="/recuperacion" element={<Recuperacion />} />
        <Route
          path="*"
          element={
            <ProtectedRoute>
              <>
                <NotFound />
                <BottomNav />
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;