import React from 'react';
import '../models/PlantLibrary.css';
import { PageHead } from '../components/';

const plantSections = [
  {
    title: 'Plantas populares',
    items: [
      { name: 'Jazmín', image: '/images/jazmin.jpg' },
      { name: 'Lavanda', image: '/images/lavanda.jpg' },
      { name: 'Orquídea', image: '/images/orquidea.jpg' },
    ],
  },
  {
    title: 'Frutas y vegetales',
    items: [
      { name: 'Aguacate', image: '/images/aguacate.jpg' },
      { name: 'Zanahoria', image: '/images/zanahoria.jpg' },
      { name: 'Fresa', image: '/images/fresa.jpg' },
    ],
  },
  {
    title: 'Flores populares',
    items: [
      { name: 'Rosa', image: '/images/rosa.jpg' },
      { name: 'Girasol', image: '/images/girasol.jpg' },
      { name: 'Tulipán', image: '/images/tulipan.jpg' },
    ],
  },
];

function PlantLibrary() {
  return (
    <div>
      <div className="library-container">
        <PageHead />
        <input
          type="text"
          placeholder="Buscar plantas, frutas, flores..."
          className="search-bar"
        />
      </div>

      {plantSections.map((section, idx) => (
        <div key={idx} className="section">
          <h3 className="section-title">{section.title}</h3>
          <div className="card-grid">
            {section.items.map((item, i) => (
              <div key={i} className="plant-card">
                <img src={item.image} alt={item.name} className="plant-image" />
                <p className="plant-name">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlantLibrary;