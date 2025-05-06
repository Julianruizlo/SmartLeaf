import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home, NotFound, Garden, Calendar, PlantIdentifier, PlantsLibrary, PlantConsultantAI, Profile, Settings } from "../pages/";
import { Login, Registro } from "../pages/";
import { getToken } from "../utils/token";
import { AuthRoute, BottomNav } from "../components/";
import "../models/App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getToken();
    setIsAuthenticated(!!token);
  }, []);
  console.log("isAuthenticated:", isAuthenticated); // Depuración
  return (
    <Router>
      <Routes>
      <Route 
          path="/login" 
          element={ <Login />} 
        />
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to= "/login" />} 
        />
        <Route 
          path="/home" 
          element={<AuthRoute> <Home /> </AuthRoute>} 
        />
        <Route 
          path="/huerta" 
          element={<AuthRoute> <> <Garden /> <BottomNav /> </> </AuthRoute>} 
        />
        <Route 
          path="/calendario" 
          element={<AuthRoute> <> <Calendar /> <BottomNav /> </> </AuthRoute>} 
        />
        <Route 
          path="/camara"
          element={<AuthRoute> <> <PlantIdentifier /> <BottomNav /> </> </AuthRoute>} 
        />
        <Route 
          path="/biblioteca"
          element={<AuthRoute> <> <PlantsLibrary /> <BottomNav /> </> </AuthRoute>} 
        />
        <Route 
          path="/consultor"
          element={<AuthRoute> <> <PlantConsultantAI /> <BottomNav /> </> </AuthRoute>} 
        />
        <Route 
          path="/perfil"
          element={<AuthRoute> <> <Profile /> <BottomNav /> </> </AuthRoute>} 
        />
        <Route 
          path="/settings"
          element={<AuthRoute> <> <Settings /> <BottomNav /> </> </AuthRoute>} 
        />
        <Route 
          path="/registrar" 
          element={<Registro />} 
        />
        <Route 
          path="*"
          element={<AuthRoute> <> <NotFound /> <BottomNav /> </> </AuthRoute>} 
        />
      </Routes>
    </Router>
  );
}

export default App;