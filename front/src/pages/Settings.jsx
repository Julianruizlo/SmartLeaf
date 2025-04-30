import React from 'react';
import { ButtonPerfil, BackButton } from '../components';
import "../models/App.css"

function Settings() {
  return (
    <div className="settings-container">
      <BackButton/>
      <h2>Configuraciones</h2>
      <ButtonPerfil/>
      <div className="settings-option">
        <label htmlFor="language">Idioma:</label>
        <select id="language" name="language">
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>
      <div className="settings-option">
        <label htmlFor="notifications">Notificaciones:</label>
        <input type="checkbox" id="notifications" name="notifications" />
      </div>
      <div className="settings-option">
        <label htmlFor="theme">Tema:</label>
        <select id="theme" name="theme">
          <option value="light">Claro</option>
          <option value="dark">Oscuro</option>
        </select>
      </div>
    </div>
  );
}

export default Settings;