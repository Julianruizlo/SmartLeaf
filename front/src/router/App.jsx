import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {Home, NotFound, Garden, Calendar, PlantIdentifier,
  PlantsLibrary, PlantConsultantAI, Profile, Settings,
  AddPlant, PlantDetails} from "../pages/";
import { Login, Registro } from "../pages/";
import { getToken } from "../utils/token";
import { AuthRoute, BottomNav, PlantProvider } from "../components/";
import "../models/App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getToken();
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} />
        <Route path="/home" element={<AuthRoute><Home /></AuthRoute>} />

        {/* Garden envuelto con contexto */}
        <Route
          path="/garden"
          element={
            <AuthRoute>
              <PlantProvider>
                <>
                  <Garden />
                  <BottomNav />
                </>
              </PlantProvider>
            </AuthRoute>
          }
        />

        <Route path="/calendar" element={<AuthRoute><PlantProvider><><Calendar /><BottomNav /></></PlantProvider></AuthRoute>} />
        <Route path="/camera" element={<AuthRoute><><PlantIdentifier /><BottomNav /></></AuthRoute>} />

        
        <Route
          path="/biblioteca"
          element={
            <AuthRoute>
              <PlantProvider>
                <>
                  <PlantsLibrary />
                  <BottomNav />
                </>
              </PlantProvider>
            </AuthRoute>
          }
        />

        <Route path="/consultor" element={<AuthRoute><><PlantConsultantAI /><BottomNav /></></AuthRoute>} />
        <Route path="/perfil" element={<AuthRoute><><Profile /><BottomNav /></></AuthRoute>} />
        <Route path="/settings" element={<AuthRoute><><Settings /><BottomNav /></></AuthRoute>} />
        <Route path="/registrar" element={<Registro />} />
        <Route path="*" element={<AuthRoute><><NotFound /><BottomNav /></></AuthRoute>} />
        <Route
          path="/agregar"
          element={
            <AuthRoute>
              <PlantProvider>
                <>
                  <AddPlant />
                  <BottomNav />
                </>
              </PlantProvider>
            </AuthRoute>
          }
        />
        <Route path="/descripcion" element={<AuthRoute><><PlantDetails /><BottomNav /></></AuthRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
