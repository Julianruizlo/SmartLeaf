import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Home, NotFound, Garden, Calendar, PlantIdentifier, PlantsLibrary, PlantConsultantAI, Profile, Settings } from "../pages/";
import { Login, Registro } from "../pages/";
import BottomNav from "../components/BottomNav.jsx";
import Jardin from "../assets/jardin.jpg";
import { getToken } from "../utils/token.js";

import "../models/App.css";

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
      <Routes>
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/home" /> : <Login />} 
        />
        <Route 
          path="/home" 
          element={<PrivateRoute element={<Home />} />} 
        />
        <Route 
          path="/huerta" 
          element={<PrivateRoute element={<> <Garden /> <BottomNav /> </>} />} 
        />
        <Route 
          path="/calendario" 
          element={<PrivateRoute element={<> <Calendar /> <BottomNav /> </>} />} 
        />
        <Route 
          path="/camara"
          element={<PrivateRoute element={<> <PlantIdentifier /> <BottomNav /> </>} />} 
        />
        <Route 
          path="/biblioteca"
          element={<PrivateRoute element={<> <PlantsLibrary /> <BottomNav /> </>} />} 
        />
        <Route 
          path="/consultor"
          element={<PrivateRoute element={<> <PlantConsultantAI /> <BottomNav /> </>} />} 
        />
        <Route 
          path="/perfil"
          element={<PrivateRoute element={<> <Profile /> <BottomNav /> </>} />} 
        />
        <Route 
          path="/settings"
          element={<PrivateRoute element={<> <Settings /> <BottomNav /> </>} />} 
        />
        <Route 
          path="/jardin"
          element={<PrivateRoute element={<> <Jardin /> <BottomNav /> </>} />}
        />
        <Route 
          path="/registrar" 
          element={<Registro />} 
        />
        <Route 
          path="*"
          element={<PrivateRoute element={<> <NotFound /> <BottomNav /> </>} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;