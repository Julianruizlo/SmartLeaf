import React, { useContext } from "react";
import { PlantContext } from "../components/PlantContext";
import { PlantCard, PageHead } from "../components/";
import "../models/Garden.css";

const Garden = () => {
  const { plants } = useContext(PlantContext);

  return (
    <div className="app">
      <PageHead />

      <div className="plant-list">
       
        {plants.map((plant, index) => (
          <PlantCard
            key={index}
            name={plant.name}
            image={plant.image}
            status={plant.status}
          />
        ))}
      </div>

      <div className="buttons">
        <button className="add-button" onClick={() => window.location.href = "/agregar"}>
          Agregar planta
        </button>
        <button className="edit-button">Editar</button>
      </div>
    </div>
  );
};

export default Garden;

