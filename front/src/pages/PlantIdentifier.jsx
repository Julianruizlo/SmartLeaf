// src/components/PlantIdentifier.jsx
/*import React, { useState } from 'react';
import { identificarPlanta } from '../services/plantIdAPI';

const PlantIdentifier = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
      setImage(base64String);
    };

    if (file) reader.readAsDataURL(file);
  };

  const handleIdentify = async () => {
    setLoading(true);
    try {
      const data = await identificarPlanta(image);
      setResult(data);
    } catch (erro) {
      alert('Hubo un error al identificar la planta.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Identificador de Plantas 🌱</h2>

      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {image && (
        <>
          <img
            src={`data:image/jpeg;base64,${image}`}
            alt="Preview"
            style={{ width: 200, marginTop: 10 }}
          />
          <br />
          <button onClick={handleIdentify} disabled={loading}>
            {loading ? 'Identificando...' : 'Identificar Planta'}
          </button>
        </>
      )}

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Resultado:</h3>
          <p><strong>Nombre común:</strong> {result.suggestions?.[0]?.plant_details?.common_names?.join(', ')}</p>
          <p><strong>Nombre científico:</strong> {result.suggestions?.[0]?.plant_name}</p>
          <p><strong>Descripción:</strong> {result.suggestions?.[0]?.plant_details?.wiki_description?.value}</p>
          <a href={result.suggestions?.[0]?.plant_details?.url} target="_blank" rel="noopener noreferrer">
            Más info
          </a>
        </div>
      )}
    </div>
  );
};

export default PlantIdentifier;*/