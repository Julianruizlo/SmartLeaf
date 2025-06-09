import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { PlantContext } from '../components/';
import { PageHead } from '../components/';
import "../models/AddPlant.css";


import aloeVeraImg from '../plantsv1/AloeVera.png';
import basilImg from '../plantsv1/Basil.png';
import cactusImg from '../plantsv1/Cactus.png';
import fernImg from '../plantsv1/Fern.png';
import rosemaryImg from '../plantsv1/Rosemary.png';

const speciesImages = {
  "Aloe Vera": aloeVeraImg,
  "Basil": basilImg,
  "Cactus": cactusImg,
  "Fern": fernImg,
  "Rosemary": rosemaryImg
};

const AddPlant = () => {
  const navigate = useNavigate();
  const { addPlant } = useContext(PlantContext);

  const [formData, setFormData] = useState({
    species: "",
    name: "",
    plantingDate: "",
    location: "",
    status: "",
    image: ""
  });

  const speciesOptions = Object.keys(speciesImages);
  const statusOptions = ["¡Regar!", "¡Cosechar!", "Recién plantada"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "species") {
      setFormData((prev) => ({
        ...prev,
        species: value,
        image: speciesImages[value] || ""
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addPlant({
      species: formData.species,
      name: formData.name,
      plantingDate: formData.plantingDate,
      location: formData.location,
      status: formData.status,
      image: formData.image 
    });

    navigate("/garden");
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
          required
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
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlant;
