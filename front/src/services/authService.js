// src/services/authService.js
const API_URL = "http://localhost:5085/api/auth/login"; // Cambiar si usás otro puerto/backend

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
  return data.token; // El backend debe devolver un objeto: { token: "..." }
}