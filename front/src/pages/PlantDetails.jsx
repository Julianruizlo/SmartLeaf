import React from "react";
import { Link } from 'react-router-dom';
import { HomeCard, PageHead } from '../components/';
import "../models/PlantDetails.css";

const PlantDetails = () => {
  return (
    <div className="plant-details-container">
      <div className="header">
        <h2>Monstera</h2>
        <p className="plant-name">Greta</p>
        <p className="scientific-name">Monstera deliciosa</p>
        <img
          className="plant-image"
          src="https://i.ibb.co/0nPMkMp/monstera.png"
          alt="Monstera"
        />
      </div>

      <div className="section">
        <p><strong>Age:</strong> 6 months</p>
        <p><strong>Next watering:</strong> 2 weeks</p>
      </div>

      <div className="section">
        <h3>Botanical information</h3>
        <p className="botanical-text">
          The monstera is a tropical plant native to the rainforests of southern
          Mexico and Central America. It’s known for its large, perforated
          leaves and has become a popular houseplant due to its easy care and
          low light tolerance.
        </p>
      </div>

      <div className="section">
        <h3>Care calendar</h3>
        <ul>
          <li>💧 Water – Every 14 days</li>
          <li>✂️ Prune – As needed</li>
          <li>🌿 Fertilize – Monthly</li>
          <li>🪴 Repot – Every 24 months</li>
        </ul>
      </div>

      <div className="section">
        <h3>Light & humidity</h3>
        <ul>
          <li>🌞 Bright indirect light</li>
          <li>💧 Medium to high humidity</li>
        </ul>
      </div>

      <div className="section">
        <h3>Biblioteca Botánica</h3>
        <p>
          📖 <a href="#">How to care for your Monstera</a> <br />
          <span className="read-time">Article · 5 min read</span>
        </p>
      </div>

     
    </div>
  );
};

export default PlantDetails;
