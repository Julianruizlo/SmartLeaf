import React from 'react';
import { ButtonPerfil, BackButton, SettingsButton } from '../Elementos';

function Garden() {
  return (
    <div>
       <header className="calendar-header">
          <BackButton/>
          <SettingsButton/>
          <h1>Mi Huerta</h1>
        
        </header>
      
    </div>
  );
}

export default Garden;
