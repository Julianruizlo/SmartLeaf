import React from 'react';
import { ButtonPerfil, BackButton, SettingsButton } from './Elementos';
import { Link } from 'react-router-dom';
import "../App.css"

function Pruebas() {
  return (
    <div>
      <BackButton/>
      <h2>Pruebas</h2>
      <SettingsButton/>
      <ButtonPerfil/>
    </div>


  );
}

export default Pruebas;
