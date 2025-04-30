import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { identifyPlant } from '../services/plantIdApi'
import axios from 'axios';
import PlantCard from '../components/PlantCard'; 
import '../models/Garden.css';
import "../models/calendar.css"

const Garden = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      const apiKey = 'TU_CLAVE_DE_API';
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

  return (
    <div className="app">
      <h1>Mis plantas</h1>
      <div className="plant-list">
        {plants.map((plant, index) => (
          <PlantCard key={index} {...plant} />
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
