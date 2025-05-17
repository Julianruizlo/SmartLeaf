import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { PlantContext } from '../components/';
import { PageHead } from '../components/';
import "../models/AddPlant.css";

const AddPlant = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    species: "",
    name: "",
    plantingDate: "",
    location: "",
    status: "",
  });

  const speciesOptions = ["Aloe Vera", "Basil", "Cactus", "Fern", "Rosemary"];
  const statusOptions = ["¡Regar!", "¡Cosechar!", "Recién plantada"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:5000/api/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          plantTypeId: await mapSpeciesToId(formData.species),
          name: formData.name,
          dateAdded: formData.plantingDate,
          location: formData.location,
          status: mapStatus(formData.status)
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const result = await response.json();
      console.log("Planta agregada:", result);
      navigate("/garden");
    } catch (err) {
      console.error("Error al agregar planta:", err.message);
      alert("Error al agregar planta: " + err.message);
    }
  };

  const handleCancel = () => {
    navigate("/garden");
  };

  const mapStatus = (texto) => {
    switch (texto) {
      case "¡Regar!": return "Regar";
      case "¡Cosechar!": return "Cosechar";
      case "Recién plantada": return "RecienPlantada";
      default: return "RecienPlantada";
    }
  };

  const mapSpeciesToId = async (nombre) => {
    const mapa = {
      "Aloe Vera": 1,
      "Basil": 2,
      "Cactus": 3,
      "Fern": 4,
      "Rosemary": 5
    };
    return mapa[nombre] || 0;
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
