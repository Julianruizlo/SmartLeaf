import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { PlantContext } from '../components/';
import { PageHead } from '../components/';
import "../models/AddPlant.css";

const AddPlant = () => {
  const [species, setSpecies] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  console.log(useContext)

  const { addPlant } = useContext(PlantContext);
  console.log(addPlant); // Esto debería mostrar la función `addPlant` si el contexto está funcionando.
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    species: "",
    name: "",
    plantingDate: "",
    location: "",
    status: "",
  });

  const speciesOptions = ["Aloe Vera", "Basil", "Cactus", "Fern", "Rosemary"];
  const statusOptions = ["¡Regar!", "¡Cosechar!", "Recién plantada"]; // Opciones de estado

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newPlant = { species, name, date };
    addPlant(newPlant);

    

  };
    const handleCancel = () => {
  navigate("/garden");
    };

  return (
    <div className="addplant-container">
      <PageHead />
      <h2 className="addplant-title">Add a plant</h2>
      <form onSubmit={handleSubmit} className="addplant-form">
        <select
          name="species"
          value={formData.species}
          onChange={handleChange}
          className="addplant-input"
          required
        >
          <option value="" disabled>Select species</option>
          {speciesOptions.map((species) => (
            <option key={species} value={species}>{species}</option>
          ))}
        </select>

        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Give it a name"
          onChange={handleChange}
          className="addplant-input"
          required
        />

        <input
          type="date"
          name="plantingDate"
          value={formData.plantingDate}
          onChange={handleChange}
          className="addplant-input"
          required
        />

        <input
          type="text"
          name="location"
          value={formData.location}
          placeholder="Location"
          onChange={handleChange}
          className="addplant-input"
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="addplant-input"
        >
          <option value="" disabled>Select status</option>
          {statusOptions.map((status) => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>

        <div className="addplant-buttons">
          <button type="submit" className="addplant-upload">Add Plant</button>
          <button
            type="button"
            className="addplant-cancel"
            onClick={handleCancel} // Llamar a la función handleCancel
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPlant;
