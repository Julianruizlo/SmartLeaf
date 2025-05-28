const API_URL = "http://localhost:5085/api/libraryplant"; // Cambia el puerto si es necesario

export async function addPlant(plantData, token) {
  const response = await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(plantData),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error al agregar la planta");
  }
  return await response.json(); // { message: "Planta agregada correctamente" }
}

export async function getMyPlants(token) {
  const response = await fetch(`${API_URL}/myplants`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  if (!response.ok) {
    throw new Error("No se pudieron obtener las plantas");
  }
  return await response.json(); // Array de plantas
}