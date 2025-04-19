import React from "react";
import '../models/Login.css';
import Container from "../Elementos/Container";
import ButtonX from "../Elementos/ButtonX"; // Importa el botón genérico

function Register() {
  return (
    <Container>
      <div className="register-box">
        <h2 className="title">Encuentra la planta perfecta para tu espacio</h2>
        <p className="subtitle">Comienza por decirnos sobre ti</p>

        <div className="button-group">
          <ButtonX text="Continuar con Google" />
          <ButtonX text="Continuar con Apple" />
          <ButtonX text="Continuar con Facebook" />
        </div>

        <p className="alt-login">Continuar de otra manera</p>

        <p className="privacy-text">
          Al continuar, aceptas los{" "}
          <a href="#" className="link">Términos de servicio</a> y la{" "}
          <a href="#" className="link">Política de privacidad</a>. Lee nuestro{" "}
          <a href="#" className="link">Aviso de Privacidad</a>.
        </p>
      </div>
    </Container>
  );
}

export default Register;