import React from 'react';
import { BackButton, SettingsButton } from '../Elementos';
import "../App.css"

function Perfil() {
  return (
    <div>
      <header className="calendar-header">
        <BackButton/>
        <h1>Mi Perfil</h1>
        <SettingsButton/>
      </header>
      <div className="perfil-container">
        <h2>Nombre de Usuario</h2>
        <p>Información adicional del usuario.</p>
      </div>
    </div>
  );
}

export default Perfil;