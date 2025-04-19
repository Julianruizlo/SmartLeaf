import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../models/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === '1234') {
      navigate('/home');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">¡Bienvenido!</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingresa tu usuario"
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
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