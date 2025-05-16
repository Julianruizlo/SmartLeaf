import React, { useState } from 'react';
import '../models/PlantLibrary.css';
import { Link } from 'react-router-dom';
import { PageHead } from '../components/';
import { getPlantInfoByName } from '../services/plantDataService';

function PlantLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [plantResults, setPlantResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setPlantResults([]);
      return;
    }

    setLoading(true);
    try {
      const data = await getPlantInfoByName(value);
      // Si tu backend devuelve un array, usa data. Si es un objeto, usa [data]
      setPlantResults(Array.isArray(data) ? data : [data]);
    } catch (error) {
      setPlantResults([]);
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <div className="library-container">
        <PageHead />
        <input
          type="text"
          placeholder="Buscar plantas, frutas, flores..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {loading && <p>Buscando...</p>}

      {plantResults.length > 0 && (
        <div className="section">
          <h3 className="section-title">Resultados</h3>
          <div className="plant-list-lib">
            {plantResults.map((item, i) => (
              <div key={i} className="plant-card-lib">
                <img src={item.imageUrl} alt={item.name} className="plant-image-lib" />
                <p className="plant-name-lib">{item.name}</p>
                <Link to={`/descripcion/${item.name.toLowerCase()}`} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PlantLibrary;
