import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HomeCard, SettingsButton, ButtonPerfil } from '../Elementos/';
import JardinImage from '../assets/Jardin.jpg';
import CalendarioImage from '../assets/Calendario.jpg';
import BiblitecaImage from '../assets/Biblioteca.jpg';
import CamaraImage from '../assets/Analisis.jpg';



class Home extends Component {
    render() {
        return (
            <div>
                <div className="app">

                    <header className="header">
                        <SettingsButton/>
                        <ButtonPerfil/>
                        <h1>SmartLeaf</h1>
                        <div className="level">
                            <span>Tu Jardín</span>
                            <input type="range" min="1" max="5" defaultValue="3" />
                            <span>4</span>
                        </div>
                    </header>
                    <main className="main">
                        <h2>Gestión personalizada del jardín</h2>
                        <HomeCard 
                            nombre="Tus plantas" descripcion="Ver todas las plantas que tienes en tu jardín" link="/huerta" src1={JardinImage} />
                        <HomeCard 
                            nombre="Calendario de riego" descripcion="Saber cuándo es el mejor momento para regar tus plantas" link="/calendario" src1={CalendarioImage}/>
                        <HomeCard 
                            nombre="Análisis de plantas" descripcion="Obtener consejos personalizados para cada planta" link="/camara" src1={CamaraImage}/>
                        <HomeCard 
                            nombre="Biblioteca botánica" descripcion="Aprender sobre plantas y descubrir nuevas especies" link="/biblioteca" src1={BiblitecaImage}/>
                      
                    </main>
                    <footer className="footer">
                        <Link to="/consultor"><button>Hablar con asistente</button></Link>
                    </footer>
                </div>

            </div>
        );
    }
}

export default Home;