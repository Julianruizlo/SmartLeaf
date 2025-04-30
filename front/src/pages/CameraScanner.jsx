import React from 'react';
import "../App.css"
import { ButtonPerfil, BackButton, SettingsButton } from '../Elementos';

function CameraScanner() {
  return (
    <div>
      <BackButton/>
      <h2>Escanear Planta</h2>
      <SettingsButton/>
      <ButtonPerfil/>
      
    </div>
  );
}

export default CameraScanner;
