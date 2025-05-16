import axios from "axios";

export const getPlantInfoByName = async function(nombrePlanta) {
  try {
    
    const response = await axios.post(
      "http://localhost:5085/api/plant/search",
      JSON.stringify(nombrePlanta),
      { headers: { "Content-Type": "application/json" } }
      
    );
console.log(response.data);
    return response.data; 
  } catch (error) {
    console.error("Error al obtener info de planta:", error);
    throw error;
  }
}