import React, { useState } from 'react';
import { PlantContext } from './PlantContext';

function PlantProvider  ({ children })  {
  const [plants, setPlants] = useState([]);

  const addPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  return (
    <PlantContext.Provider value={{ plants, addPlant }}>
      {children}
    </PlantContext.Provider>
  );
};
export default PlantProvider;

