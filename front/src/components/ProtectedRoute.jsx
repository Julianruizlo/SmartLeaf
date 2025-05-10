import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
  const userData = Cookies.get('userData');
  console.log('userData:', userData); // Depuración
  const currentPath = window.location.pathname; // Obtiene la ruta actual
  if (!userData && currentPath === '/') return null; // Evita redirección infinita
  return userData ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
