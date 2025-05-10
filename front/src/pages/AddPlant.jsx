import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { PlantContext} from '../components/';
import "../models/AddPlant.css";

const AddPlant = () => {
  const [species, setSpecies] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  console.log(useContext)

  const { addPlant } = useContext(PlantContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newPlant = { species, name, date };
    addPlant(newPlant);

    
    navigate("/huerta");
  };

  return (
    <div className="add-plant-container">
      <h2>Add a plant</h2>

      <form onSubmit={handleSubmit} className="plant-form">
        <button
          type="button"
          className="input-button"
          onClick={() => setSpecies()} 
        >
          {species || "Select species"} <span className="arrow">›</span>
        </button>

        <input
          type="text"
          placeholder="Give it a name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="date-wrapper">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <span className="calendar-icon">📅</span>
        </div>

        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPlant;
