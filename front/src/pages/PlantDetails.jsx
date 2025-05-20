import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { PageHead } from "../components";
import "../models/PlantDetails.css";

function PlantDetails() {
  const { name } = useParams();
  const location = useLocation();
  const state = location.state || {};

  return (
    <div className="plant-id-result">
      <PageHead />
      <h3>Resultado:</h3>
      {state.imageUrl && (
        <img
          src={state.imageUrl}
          alt={name}
          className="plant-id-result-image"
          style={{ maxWidth: 250, borderRadius: 12, margin: "1rem auto" }}
        />
      )}
      <p><strong>Nombre común:</strong> {state.commonName || name}</p>
      <p><strong>Nombre científico:</strong> {state.scientificName ? state.scientificName : "No disponible"}</p>
      <p><strong>Descripción:</strong> {state.description ? state.description : "No disponible"}</p>
    </div>
  );
}

export default PlantDetails;