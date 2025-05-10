import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../models/Chatbot.css";
import { Dropdown } from '../components';

function PlantConsultantAI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);

    try {
      const response = await fetch('http://localhost:5085/api/chatbot/ask?accessToken=6zNLojd4RFuSAE4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: input })
      });

      const data = await response.json();
      console.log("Respuesta de la API:", data);

      if (data.messages && data.messages.length > 0)
      {
      // Filtrar los mensajes de tipo "answer"
      const answers = data.messages.filter(msg => msg.type === 'answer');
      const lastAnswer = answers[answers.length - 1];

      if (lastAnswer) 
      {
        setMessages(prev => [...prev, { text: lastAnswer.content, sender: 'bot' }]);
      } else 
        {
        setMessages(prev => [...prev, { text: 'No se encontró una respuesta del bot.', sender: 'bot' }]);
        }
      } 
    else 
      {
        setMessages(prev => [...prev, { text: 'La IA no devolvió una respuesta válida.', sender: 'bot' }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { text: 'Error al conectar con la IA.', sender: 'bot' }]);
    }

    setInput('');
  };

  return (
    <div>
      <div className='calendar-container'>
        <header className="calendar-header">
          <Link to="/"><button className="back-button">←</button></Link>
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
