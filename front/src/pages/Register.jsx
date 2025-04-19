import React, { Component } from 'react';

function Register() {
  return (
    <div>
      <h1>Registro</h1>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Correo electrónico:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Register;