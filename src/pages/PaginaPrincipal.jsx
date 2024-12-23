import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import '../styles/PaginaPrincipal.css';
import medellin from '../assets/medellin.jpg';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function PaginaPrincipal() {
  const [themeVisible, setThemeVisible] = useState(false);
  const navigate = useNavigate();

  const toggleThemeIcons = () => {
    setThemeVisible(!themeVisible);
  };

  return (
    <div>
      <NavBar />
      <section className="intro-section">
        <div className="intro">
          <img className='medellin' src={medellin} alt="Vista de Medellín" />
          <div className="intro-text">
            <h2 className='cursor-default'>Descubre la Magia de Medellín</h2>
            <p className='cursor-default'>
              Bienvenido a Medellín, una ciudad vibrante que combina historia, cultura y naturaleza. 
              ¡Déjate llevar por su encanto y descubre todo lo que tiene para ofrecer!
            </p>
          </div>
        </div>
        
        <div className="highlights">
          <h3 className='cursor-default'>Atractivos Imperdibles</h3>
          <div className="highlight-item">
            <i className='bx bxs-pyramid highlight-icon'></i>
            <h4 className='cursor-default'>Historia</h4>
            <p className='cursor-default'>Explora la rica historia y los lugares emblemáticos de la ciudad.</p>
          </div>
          <div className="highlight-item">
            <i className='bx bxs-leaf highlight-icon'></i>
            <h4 className='cursor-default'>Naturaleza</h4>
            <p className='cursor-default'>Disfruta de los impresionantes parques y reservas naturales.</p>
          </div>
          <div className="highlight-item">
            <i className='bx bx-paint highlight-icon'></i>
            <h4 className='cursor-default'>Arte y Cultura</h4>
            <p className='cursor-default'>Sumérgete en la vibrante escena artística y cultural.</p>
          </div>
          <div className="highlight-item">
            <i className='bx bxs-star highlight-icon'></i>
            <h4 className='cursor-default'>Gastronomía</h4>
            <p className='cursor-default'>Deleita tu paladar con la exquisita comida local.</p>
          </div>
        </div>
        
        <button className="cta-button" onClick={() => navigate('/exploraMasSitios')}>¡Explora Más Sitios!</button>
      </section>
    </div>
  );
}