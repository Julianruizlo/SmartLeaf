const API_URL = "http://localhost:5085/api/auth"; // Cambia el puerto si es necesario

export async function login(email, password) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error al iniciar sesión");
  }
  return await response.json(); // { token: "..." }
}

export async function register(fullName, userName, email, password) {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName, userName, email, password }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error al registrar usuario");
  }
  return await response.json(); // { message: "Usuario registrado correctamente" }
}

export async function getCurrentUser(token) {
  const response = await fetch(`${API_URL}/me`, {
    method: "GET",
    headers: { "Authorization": `Bearer ${token}` }
  });
  if (!response.ok) {
    throw new Error("No autenticado");
  }
  return await response.json(); // { email, role }
}