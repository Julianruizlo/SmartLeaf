import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
  const userData = Cookies.get('userData');
  return userData ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
