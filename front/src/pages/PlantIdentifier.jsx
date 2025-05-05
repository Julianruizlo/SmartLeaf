import { useState } from 'react';
import { identifyPlant } from '../services/plantIdAPI';
import { PageHead } from '../components';
import '../models/PlantIdentifier.css'; 

const PlantIdentifier = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result.split(',')[1]);
    };
    reader.readAsDataURL(file);
  };

  const handleIdentify = async () => {
    if (!image) return alert("Por favor, sube una imagen antes de identificar.");

    setLoading(true);
    try {
      const data = await identifyPlant(image);
      setResult(data);
    } catch (err) {
      console.error("Error al identificar la planta:", err);
      alert('Hubo un error al identificar la planta. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  const suggestion = result?.suggestions?.[0];
  const details = suggestion?.plant_details;

  return (
    <div className="app">
      <PageHead />

      <div className="plant-id-header-image">
        <img src="../assets/Analizador.jpg" alt="Encabezado" />
      </div>

      <div className="plant-id-guide-text">
        <p>Por favor, toma una fotografía de tu planta o carga una imagen para 
          que podamos analizarla.</p>
      </div>

      <div className="plant-id-upload">
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      {image && (
        <div className="plant-id-preview">
          <img src={`data:image/jpeg;base64,${image}`} alt="Preview" />
          <button onClick={handleIdentify} disabled={loading}>
            {loading ? 'Identificando...' : 'Identificar planta'}
          </button>
        </div>
      )}

      {result && (
        <div className="plant-id-result">
          <h3>Resultado:</h3>
          <p><strong>Nombre común:</strong> {details?.common_names?.join(', ') || 'No disponible'}</p>
          <p><strong>Nombre científico:</strong> {suggestion?.plant_name || 'No disponible'}</p>
          <p><strong>Descripción:</strong> {details?.wiki_description?.value || 'No disponible'}</p>
          <a href={details?.url} target="_blank" rel="noopener noreferrer">Más info</a>
        </div>
      )}
    </div>
  );
};

export default PlantIdentifier;