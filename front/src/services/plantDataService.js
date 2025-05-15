import axios from "axios";

export async function getPlantInfoByName(nombrePlanta) {
  try {
    const response = await axios.post("http://localhost:5085/api/plant/byname", { nombre: nombrePlanta }, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data; 
  } catch (error) {
    console.error("Error al obtener info de planta:", error);
    throw error;
  }
}