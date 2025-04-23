import axios from "axios";


export async function identificarPlanta(base64Image) {
  try {
    const response = await axios.post("http://localhost:5000/api/planta/identificar", base64Image, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al identificar planta:", error);
    throw error;
  }
}
