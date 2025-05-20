import axios from "axios";

export const getPlantImageByName = async (plantName) => {
  try {
    const res = await axios.get(`http://localhost:5085/api/plantsearch/${encodeURIComponent(plantName)}`);
    console.log("Respuesta de la API:", res.data); // <-- Aquí ves el JSON en la consola
    return res.data;
  } catch (error) {
    throw new Error('No se encontró la planta o no tiene imagen.');
  }
};

