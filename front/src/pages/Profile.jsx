import React from "react";
import { PageHead } from "../components";
import "../models/App.css";

function Profile() {
  return (
    <div>
      <header className="calendar-header">
        <PageHead />
      </header>
      <div className="perfil-container">
        <h2>Nombre de Usuario</h2>
        <p>Información adicional del usuario.</p>
      </div>
    </div>
  );
}

export default Profile;