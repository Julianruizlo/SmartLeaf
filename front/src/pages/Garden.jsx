import React, { useState, useEffect } from 'react';
import { identifyPlant } from '../services/plantIdAPI';
import { PlantCard, PageHead } from '../components/';
import { Cilantro, Tomate, Albahaca } from '../assets';
import '../models/Garden.css';
import "../models/calendar.css";

const Garden = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const plantNames = ['Cilantro', 'Pimientos', 'Tomates', 'Lechuga', 'Albahaca', 'Fresas'];
        const plantActions = ['¡Regar!', '¡Cosechar!', '¡Regar!', '¡Cosechar!', '¡Regar!', '¡Regar!'];

        const promises = plantNames.map(async (name, index) => {
          const imageBase64 = `data:image/jpeg;base64,VALID_IMAGE_DATA`;
          const response = await identifyPlant(imageBase64);

          if (!response || !response.suggestions || !response.suggestions[0]) {
            console.error(`No se encontraron sugerencias para ${name}`);
            return { name, image: '', status: plantActions[index] };
          }

          const imageUrl = response.suggestions[0].plant_details.url;
          return { name, image: imageUrl, status: plantActions[index] };
        });

        const plantData = await Promise.all(promises);
        setPlants(plantData);
      } catch (error) {
        console.error('Error al obtener las plantas:', error);
      }
    };

    fetchPlants();
  }, []);

  // Ejemplos estáticos de PlantCard
  const examplePlants = [
    { name: 'Cilantro', status: '¡Regar!', image: Cilantro },
    { name: 'Tomates', status: '¡Cosechar!', image: Tomate },
    { name: 'Albahaca', status: '', image: Albahaca },
  ];

  return (
    <div className="app">
      <PageHead />
      <div className="plant-list">
        {plants.map((plant, index) => (
          <PlantCard key={index} {...plant} />
        ))}
        {examplePlants.map((plant, index) => (
          <PlantCard key={`example-${index}`} {...plant} />
        ))}
      </div>
      <div className="buttons">
        <button className="add-button">Agregar planta</button>
        <button className="edit-button">Editar</button>
      </div>
    </div>
  );
};

export default Garden;
