import { useState } from 'react';
import axios from 'axios';


const PlantSearch = () => {
  const [plantName, setPlantName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const buscarPlanta = async () => {
    setError('');
    setImageUrl('');
    if (!plantName.trim()) return;

    try {
      const res = await axios.get(`http://localhost:5085/api/plantsearch/${encodeURIComponent(plantName)}`);
      setImageUrl(res.data);
    } catch (err) {
      setError('No se encontró la planta o no tiene imagen.');
    }
  };

  return (
    <div>
      <h2>Buscador de Plantas</h2>
      <input
        type="text"
        value={plantName}
        onChange={(e) => setPlantName(e.target.value)}
        placeholder="Nombre común de la planta"
      />
      <button onClick={buscarPlanta}>Buscar</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {imageUrl && (
        <div>
          <h3>Resultado:</h3>
          <img src={imageUrl} alt="Planta" style={{ maxWidth: '300px', marginTop: '10px' }} />
        </div>
      )}
    </div>
  );
};

export default PlantSearch;
