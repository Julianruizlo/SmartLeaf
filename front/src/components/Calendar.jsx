import React from 'react';
import { ButtonPerfil, BackButton, SettingsButton } from './Elementos';
import "../App.css"

function Calendar() {
  const plantPlans = [
    { name: 'Tomate', action: 'Regar', date: 'Febrero 5', icon: '🌱' },
    { name: 'Perro', action: 'Fertilizar', date: 'Febrero 15', icon: '🌿' },
    { name: 'Rosa', action: 'Podar', date: 'Febrero 30', icon: '🌱' }
  ];
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, today.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, today.getMonth(), 1).getDay(); 
  const blankDays = Array.from({ length: firstDayOfMonth });
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="calendar-container">
      <header className="calendar-header">
        <BackButton/>
        <h2>Calendario</h2>
        <SettingsButton/>
        <ButtonPerfil/>

      </header>

      <div className="calendar-month">
        <p>{`${currentMonth} ${currentYear}`}</p>
        <div className="calendar-grid">
          {['S','M','T','W','T','F','S'].map((day, idx) => (
            <div key={idx} className="calendar-day-label">{day}</div>
          ))}
          {blankDays.map((_, i) => (
            <div key={`blank-${i}`} className="calendar-day empty"></div>
          ))}
          {monthDays.map((day, i) => (
            <div key={`day-${i}`} className={`calendar-day ${day === currentDay ? 'active' : ''}`}>
          {day}
          </div>
          ))}
        </div>
      </div>

      <h3 className="plans-title">Plants with plans</h3>
      <div className="plans-list">
        {plantPlans.map((plant, i) => (
          <div key={i} className="plan-card">
            <span className="icon">{plant.icon}</span>
            <div className="plan-details">
              <strong>{plant.name}</strong>
              <p>{plant.action}: {plant.date}</p>
            </div>
            <span className="options">⋮</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;

