import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"

function Calendar() {
  const plantPlans = [
    { name: 'Tomato', action: 'Watering', date: 'January 5', icon: '🌱' },
    { name: 'Kale', action: 'Fertilizing', date: 'January 15', icon: '🌿' },
    { name: 'Rosemary', action: 'Pruning', date: 'January 30', icon: '🌱' }
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
        <Link to = "/"><button className="back-button">←</button></Link>
        <h2>Calendario</h2>
        <button className="settings-button">⚙️</button>
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

