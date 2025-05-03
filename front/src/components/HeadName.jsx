import React from 'react';
import "../models/HeadName.css";
import Logo from "../assets/Logo.jpg";
import ButtonPerfil from './ButtonPerfil';
import BackButton from './BackButton';
import SettingsButton from './SettingsButton';

function HeadName({ title }) {
  return (
    <header className="head-name">
      <BackButton /> {/* Botón para retroceder */}
      <img src={Logo} alt="Logo" className="logo" /> {/* Logo de la app */}
      <h1 className="app-name">{title}</h1> {/* Título dinámico */}
      <div className="head-buttons">
        <SettingsButton /> {/* Botón de configuración */}
        <ButtonPerfil /> {/* Botón de perfil */}
      </div>
    </header>
  );
}

export default HeadName;