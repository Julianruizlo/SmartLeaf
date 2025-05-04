import React from "react";
import { useLocation } from "react-router-dom";
import { ButtonPerfil, SettingsButton, BackButton} from "./";
import  "../models/PageHeader.css"

const titles = {
  "/home": "Home",
  "/huerta": "Tus plantas",
  "/calendario": "Calendario de riego",
  "/camara": "Análisis de plantas",
  "/biblioteca": "🌿 Botánica",
  "/consultor": "Asistente virtual",
  "/perfil": "Perfil",
  "/settings": "Configuración",
  "/jardin": "Jardín",
  "/registrar": "Registro",
  "/login": "Iniciar sesión",
};

function PageHead() {
  const location = useLocation();
  const pageTitle = titles[location.pathname] || "";

  return (
    <header className="app-header">
      <BackButton />
      <h1 className="header-title">{pageTitle}</h1>
      <SettingsButton />
      <ButtonPerfil />
    </header>
  );
};

export default PageHead;  