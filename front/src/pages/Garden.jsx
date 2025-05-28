import React, { useContext, useEffect, useState } from "react";
import { PlantContext } from "../context/PlantContext";
import { PlantCard, PageHead } from "../components/";
import "../models/Garden.css";
import { getMyPlants } from "../services/plantService";

function Garden() {
  const { plants: contextPlants } = useContext(PlantContext);
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const token = localStorage.getItem("token");
        const data = await getMyPlants(token);
        setPlants(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPlants();
  }, []);

  return (
    <div className="app">
      <PageHead />

      <div className="plant-list">
        {(plants.length > 0 ? plants : contextPlants).map((plant, index) => (
          <PlantCard
            key={index}
            name={plant.customName || plant.name}
            image={plant.image}
            status={plant.status}
          />
        ))}
      </div>

      <div className="buttons">
        <button className="add-button" onClick={() => window.location.href = "/add"}>
          Agregar planta
        </button>
        <button className="edit-button">Editar</button>
      </div>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

export default Garden;