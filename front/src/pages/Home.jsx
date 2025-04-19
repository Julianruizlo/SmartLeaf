import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Home extends Component {
    render() {
        return (
            <div>
                <div className="app">
      <header className="header">
        <h1>SmartLeaf</h1>
        <div className="level">
          <span>Tu Jardín</span>
          <input type="range" min="1" max="5" defaultValue="3" />
          <span>4</span>
        </div>
      </header>
      <main className="main">
        <h2>Gestión personalizada del jardín</h2>
        <div className="card">
          <h3>Tus plantas</h3>
          <p>Ver todas las plantas que tienes en tu jardín</p>
          <Link to="/huerta"><button>Ver plantas</button></Link>
        </div>
        <div className="card">
          <h3>Calendario de riego</h3>
          <p>Saber cuándo es el mejor momento para regar tus plantas</p>
          <Link to="/calendario"><button>Calendario</button></Link>
        </div>
        <div className="card">
          <h3>Análisis de plantas</h3>
          <p>Obtener consejos personalizados para cada planta</p>
          <Link to="/camara"><button>Análisis</button></Link>
        </div>
        <div className="card">
          <h3>Biblioteca botánica</h3>
          <p>Aprender sobre plantas y descubrir nuevas especies</p>
          <Link to="/biblioteca"><button>Explorar biblioteca</button></Link>
        </div>
      </main>
      <div className="card">
          <h3>Consulta con IA</h3>
          
          <Link to="/consultor"><button>Hablar con asistente</button></Link>
      </div>
    </div>
            </div>
        );
    }
}

export default Home;