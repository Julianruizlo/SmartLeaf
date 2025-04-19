import React from 'react';
import { ButtonPerfil, BackButton, SettingsButton } from './Elementos';
import "../App.css"

function PlantConsultantAI() {
  return (
    <div>
      <BackButton/>  
      <h2>Consultor Inteligente</h2>
      <SettingsButton/>
      <ButtonPerfil/>
    </div>
  );
}

export default PlantConsultantAI;
