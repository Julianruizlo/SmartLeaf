import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authServices.js';
import { saveToken } from '../utils/token';
import '../models/Login.css';
import Cookies from 'js-cookie';

 function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
 
   const navigate = useNavigate();
 
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      // Guarda el token en localStorage o cookies
      localStorage.setItem("token", data.token);
      Cookies.set("userData", JSON.stringify({ email })); // Puedes guardar más info si quieres
      // Redirige al home o donde quieras
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">¡Bienvenido!</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo electrónico"
        required/>
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
            required/>
          <h3 className="login-subtitle">
            <button
              type="button"
              className="rec-button"
              onClick={() => navigate('/recuperacion')}>
              Recuperar contraseña
            </button>
          </h3>
        </div>
        {error && <p className="login-error">{error}</p>}
        <button type="submit" className="login-button">
          Iniciar Sesión
        </button>
        <h3 className="login-sign">
          <button
            type="button"
            className="rec-button"
            onClick={() => navigate('/registrar')}>
            ¿Nuevo usuario? Regístrate
          </button>
        </h3>
      </form>
    </div>
  );
}

export default Login;