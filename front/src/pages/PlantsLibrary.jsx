import React from 'react';
import '../models/PlantLibrary.css';
import { PageHead } from '../components/';
import { Cilantro, Jazmin, Tomate, Albahaca} from '../assets/';

const plantSections = [
  {
    title: 'Plantas populares',
    items: [
      { name: 'Jazmín', image: {Jazmin} },
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
    <div className="app">
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
          <div className="plant-list-lib">
            {section.items.map((item, i) => (
              <div key={i} className="plant-card-lib">
                <img src={item.image} alt={item.name} className="plant-image-lib" />
                <p className="plant-name-lib">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlantLibrary;