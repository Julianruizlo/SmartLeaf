import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageHead } from "../components";
import { addPlant } from "../services/plantService";
import "../models/AddPlant.css";

const speciesOptions = [
  { id: 1, name: "Aloe Vera" },
  { id: 2, name: "Basil" },
  { id: 3, name: "Cactus" },
  { id: 4, name: "Fern" },
  { id: 5, name: "Rosemary" }
];

const statusOptions = [
  { id: 1, label: "¡Regar!" },
  { id: 2, label: "¡Cosechar!" },
  { id: 3, label: "Recién plantada" }
];

function AddPlant() {
  const [formData, setFormData] = useState({
    plantTypeId: "",
    customName: "",
    plantedDate: "",
    region: "",
    status: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // Validar fecha
    const plantedDate = new Date(formData.plantedDate);
    if (isNaN(plantedDate.getTime())) {
      setError("Por favor, ingresa una fecha de plantación válida.");
      setLoading(false);
      return;
    }
    try {
      const token = localStorage.getItem("token");
      await addPlant(
        {
          plantTypeId: parseInt(formData.plantTypeId),
          customName: formData.customName,
          plantedDate: formData.plantedDate,
          region: formData.region,
          status: parseInt(formData.status)
        },
        token
      );
      alert("¡Planta agregada correctamente!");
      navigate("/garden");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      plantTypeId: "",
      customName: "",
      plantedDate: "",
      region: "",
      status: ""
    });
    navigate(-1); // Volver a la página anterior
  };

  return (
    <div className="addplant-container">
      <PageHead />
      <h2 className="addplant-title">Add a plant</h2>
      <form onSubmit={handleSubmit} className="addplant-form">
        <select
          name="plantTypeId"
          value={formData.plantTypeId}
          onChange={handleChange}
          className="addplant-input"
          required
        >
          <option value="" disabled>Select species</option>
          {speciesOptions.map((species) => (
            <option key={species.id} value={species.id}>{species.name}</option>
          ))}
        </select>

        <input
          type="text"
          name="customName"
          value={formData.customName}
          placeholder="Give it a name"
          onChange={handleChange}
          className="addplant-input"
          required
        />

        <input
          type="date"
          name="plantedDate"
          value={formData.plantedDate}
          onChange={handleChange}
          className="addplant-input"
          required
        />

        <input
          type="text"
          name="region"
          value={formData.region}
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
            <option key={status.id} value={status.id}>{status.label}</option>
          ))}
        </select>

        <div className="addplant-buttons">
          <button type="submit" className="addplant-upload" disabled={loading}>
            {loading ? "Agregando..." : "Add Plant"}
          </button>
          <button
            type="button"
            className="addplant-cancel"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
        {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
      </form>
    </div>
  );
}

export default AddPlant;