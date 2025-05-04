import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, NotFound, Garden, Calendar, PlantIdentifier, PlantsLibrary, PlantConsultantAI, Profile, Settings } from "../pages/";
import { Login, Registro } from "../pages/";
import BottomNav from "../components/BottomNav.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Jardin from "../assets/jardin.jpg";

import "../models/App.css"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" 
        element={<Login />}
         />
        <Route path="/home" 
        element={ <ProtectedRoute> <Home /> </ProtectedRoute> } 
        />
        <Route path="/huerta" 
        element={ <ProtectedRoute> <> <Garden /> <BottomNav /> </> </ProtectedRoute>  } 
        />
        <Route path="/calendario" 
        element={ <ProtectedRoute> <> <Calendar /> <BottomNav /> </> </ProtectedRoute> } 
        />
        <Route path="/camara"
          element={ <ProtectedRoute> <> <PlantIdentifier /> <BottomNav />  </> </ProtectedRoute> }
        />
        <Route path="/biblioteca"
          element={ <ProtectedRoute> <> <PlantsLibrary /> <BottomNav /> </> </ProtectedRoute> }
        />
        <Route path="/consultor"
          element={ <ProtectedRoute> <> <PlantConsultantAI /> <BottomNav /> </> </ProtectedRoute> }
        />
        <Route path="/perfil"
          element={ <ProtectedRoute> <> <Profile /> <BottomNav /> </> </ProtectedRoute>}
        />
        <Route path="/settings"
          element={ <ProtectedRoute> <> <Settings /> <BottomNav /> </> </ProtectedRoute>}
        />
        <Route path="/jardin"
          element={ <ProtectedRoute> <> 
          <img src={Jardin} alt="jardin" /> 
          <BottomNav /> </> </ProtectedRoute>
          }
        />
        <Route path="/registrar" 
        element={<Registro />} 
        />
        <Route path="*"
          element={ <ProtectedRoute> <> <NotFound /> <BottomNav /> </> </ProtectedRoute> }
        />
      </Routes>
    </Router>
  );
}

export default App;