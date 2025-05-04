import React, { useState } from 'react';
import { identifyPlant } from '../services/plantIdAPI';
import { PageHead } from '../components/';

const PlantIdentifier = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
      setImage(base64String);
    };
    reader.readAsDataURL(file);
  };

  const handleIdentify = async () => {
    if (!image) {
      alert("Por favor, sube una imagen antes de identificar.");
      return;
    }

    setLoading(true);
    try {
      const data = await identifyPlant(image);
      setResult(data);
    } catch (error) {
      console.error("Error al identificar la planta:", error);
      alert('Hubo un error al identificar la planta. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="plant-identifier-container">
      <PageHead />
      <div className="upload-section">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="upload-input"
        />
      </div>

      {image && (
        <div className="preview-section">
          <img
            src={`data:image/jpeg;base64,${image}`}
            alt="Preview"
            className="preview-image"
          />
          <button
            onClick={handleIdentify}
            disabled={loading}
            className="identify-button"
          >
            {loading ? 'Identificando...' : 'Identificar Planta'}
          </button>
        </div>
      )}

      {result && (
        <div className="result-section">
          <h3>Resultado:</h3>
          <p>
            <strong>Nombre común:</strong>{' '}
            {result.suggestions?.[0]?.plant_details?.common_names?.join(', ') || 'No disponible'}
          </p>
          <p>
            <strong>Nombre científico:</strong>{' '}
            {result.suggestions?.[0]?.plant_name || 'No disponible'}
          </p>
          <p>
            <strong>Descripción:</strong>{' '}
            {result.suggestions?.[0]?.plant_details?.wiki_description?.value || 'No disponible'}
          </p>
          <a
            href={result.suggestions?.[0]?.plant_details?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="more-info-link"
          >
            Más info
          </a>
        </div>
      )}
    </div>
  );
};

export default PlantIdentifier;