import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { identifyPlant } from '../services/plantIdAPI';
import { PlantCard, PageHead } from '../components/';
import { Cilantro, Tomate, Albahaca } from '../assets';
import '../models/Garden.css';
import "../models/calendar.css";

const Garden = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      const plantNames = ['Cilantro', 'Pimientos', 'Tomates', 'Lechuga', 'Albahaca', 'Fresas'];
      const plantActions = ['¡Regar!', '¡Cosechar!', '¡Regar!', '¡Cosechar!', '¡Regar!', '¡Regar!'];

      const promises = plantNames.map(async (name, index) => {
        const imageBase64 = `data:image/jpeg;base64,${name}`;
        const response = await identifyPlant(imageBase64);
        const imageUrl = response.suggestions[0].plant_details.url;
        return { nombre: name, imagen: imageUrl, estado: plantActions[index] };
      });

      const plantData = await Promise.all(promises);
      setPlants(plantData);
    };

    fetchPlants();
  }, []);

  // Ejemplos estáticos de PlantCard
  const examplePlants = [
    { nombre: 'Cilantro', estado: '¡Regar!', imagen: Cilantro },
    { nombre: 'Tomates', estado: '¡Cosechar!', imagen: Tomate },
    { nombre: 'Albahaca', estado: '¡Regar!', imagen: Albahaca },
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
