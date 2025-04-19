// src/api/plantIdApi.js
import axios from 'axios';

const PLANT_ID_API_KEY = 'Lq1gU81VpzPVQMvSmTm1ZHOLiPZuhFBCBYvtEUzzXO7IaIvDm2'; 

export const identifyPlant = async (imageBase64) => {
  const url = 'https://api.plant.id/v2/identify';

  const data = {
    images: [imageBase64],
    organs: ['leaf'],
    modifiers: ['crops_fast', 'similar_images'],
    plant_language: 'es',
    plant_details: ['common_names', 'url', 'name_authority', 'wiki_description'],
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': PLANT_ID_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error identificando la planta:', error);
    throw error;
  }
};