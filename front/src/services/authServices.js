const API_URL = "http://localhost:5085/api/auth/login";// Puerto ENDPOINT DEL BACKEND

import Cookies from 'js-cookie';

export async function login(email, password) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login fallido");
  }

  const data = await response.json();
  Cookies.set('userData', JSON.stringify(data.userData)); // Guarda los datos del usuario en las cookies
  return data.token; // Devuelve el token
}