import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PlantCard, PageHead,PlantContext } from '../components/';
import { Cilantro, Tomate, Albahaca } from '../assets';


import '../models/Garden.css';
import "../models/calendar.css";

const Garden = () => {
  const { plants } = useContext(PlantContext); 

  
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
          <PlantCard key={`added-${index}`} {...plant} />
        ))}

       
        {examplePlants.map((plant, index) => (
          <PlantCard key={`example-${index}`} {...plant} />
        ))}
      </div>

      <div className="buttons">
        <Link to="/agregar" className="add-button">Agregar planta</Link>
        <button className="edit-button">Editar</button>
      </div>
    </div>
  );
};

export default Garden;

