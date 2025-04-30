// SettingsButton.jsx
import React from 'react';
import "../models/utilitiesbottoms.css";
import { Link } from 'react-router-dom';

function SettingsButton() {
  return (
    <Link to="/settings">
      <button 
      className="settings-button">
        ⚙️
      </button>
    </Link>
  );
}

export default SettingsButton;