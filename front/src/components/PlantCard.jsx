import React from "react";
import { Link } from "react-router-dom"; // Importar Link
import "../models/Garden.css";

const statusColors = {
  "¡Regar!": "#1c9c56",
  "¡Cosechar!": "#215ead",
  "Recién plantada": "#888",
};

const PlantCard = ({ name = "Sin nombre", image = null, status = "Recién plantada", plantCard = null }) => {
  const ruta = `/planta/${name.toLowerCase()}`;
  return (
    <div className="plant-card">
      <Link to={ruta}>
        <img
          src={image} 
          alt={name}
          className="plant-image"
        />
      </Link>
      <h3 className="plant-name">{name}</h3>
      <p
        className="plant-status"
        style={{ color: statusColors[status] || "#888" }}
      >
        {status}
      </p>
      {plantCard && (
        <Link
          to={`/descripcion/${encodeURIComponent(plantCard.name)}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="plant-card-lib">
            <img src={plantCard.imageUrl} alt={plantCard.name} className="plant-image-lib" />
            <p className="plant-name-lib">{plantCard.name}</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PlantCard;