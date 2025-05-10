
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "../models/Chatbot.css"
import { Dropdown } from '../components';


function PlantConsultantAI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);

    try {
      const response = await fetch('http://localhost:5000/api/chat', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: input })
      });
      const data = await response.json();

      setMessages(prev => [...prev, { text: data.reply, sender: 'bot' }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: 'Error al conectar con la IA.', sender: 'bot' }]);
    }

    setInput('');
  };
  return (

   <div > 
    <div className='calendar-container'>
    <header className="calendar-header">
    <Link to = "/"><button className="back-button">←</button></Link>
    <h2>Consultor Plantie</h2>
    <button className="settings-button">⚙️</button>
  </header>
  </div>
  <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Preguntá algo sobre tus plantas..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>

    </div>

    </div>
  );
}

export default PlantConsultantAI;
