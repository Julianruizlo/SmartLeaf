import React from 'react';
import { Link } from 'react-router-dom';
import "../models/utilitiesbottoms.css";

function ButtonPerfil() {
  return (
    <Link to="/perfil">
      <button className="perfil-button">
        👤
      </button>
    </Link>
  );
}

export default ButtonPerfil;