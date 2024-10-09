import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Acuario from '../ParqueExplora/Acuario.jpg';
import colombia from '../assets/parqueExplora.webp';
import Pez1 from '../ParqueExplora/Pez1.jpg'; 
import { useNavigate } from 'react-router-dom';

export default function ParqueExplora() {
  const [currentImage, setCurrentImage] = useState(Acuario);
  const [rating, setRating] = useState(0);
  const [themeVisible, setThemeVisible] = useState(false); // State for theme visibility
  const navigate = useNavigate();

  const images = [Acuario, Pez1]; // Array of images
  const showImage = (index) => setCurrentImage(images[index]);

  const toggleThemeIcons = () => setThemeVisible(!themeVisible); // Function to toggle theme icons

  return (
    <div className='min-h-screen p-6 bg-white'>

      <nav className='navE'>
        <h1 className='Eco'>EcoTuristea</h1>
        <ul>
          <li className='inicio1' onClick={() => navigate("/exploraMasSitios")}>Inicio</li>
          <li className='sobreNosotros2' onClick={() => navigate("/sobreNosotros")}>Sobre Nosotros</li>
          <li className='Tema3'>
            Tema
            <span onClick={toggleThemeIcons} style={{ marginLeft: '5px', cursor: 'pointer' }}>
              <i className='bx bx-chevron-down'></i>
            </span>
            {themeVisible && (
              <div className='theme-icons'>
                <i className='bx bxs-sun' style={{ fontSize: '20px', marginLeft: '10px' }}></i>
                <i className='bx bxs-moon' style={{ fontSize: '20px', marginLeft: '5px' }}></i>
              </div>
            )}
          </li>
        </ul>
        <div className='salir' onClick={() => navigate("/login")}>
          <i className='bx bx-exit'></i>
          <p>Salir</p>
        </div>
      </nav>

      <div id="hero" className='relative mb-12'>
        <img 
          src={colombia} 
          alt="Colombia" 
          className='object-cover w-full rounded-lg shadow-lg h-96 brightness-50'
        />
        <h1 className='absolute p-6 text-6xl font-extrabold text-white transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-lg shadow-2xl top-1/2 left-1/2 bg-opacity-60'>
          Parque Explora
        </h1>
      </div>

      <section id="main-content" className='flex flex-col gap-6 md:flex-row'>
        <div className='flex-1 p-6 bg-white rounded-lg shadow-lg'>
          <h2 className='mb-6 text-4xl font-bold text-gray-800'>Acuario</h2>
          <p className='text-lg leading-relaxed text-gray-700'>
            <strong className='text-blue-600'>Más de dos mil peces</strong> de unas <strong className='text-blue-600'>250 especies</strong> 
            habitan el <strong className='text-blue-600'>Acuario Explora</strong>, un espacio dedicado a la 
            <strong className='text-blue-600'>educación, conservación e investigación</strong> de la vida que 
            recrea <strong className='text-blue-600'>ríos</strong>, <strong className='text-blue-600'>selvas amazónicas inundadas</strong>, 
            <strong className='text-blue-600'>arrecifes de coral</strong> y otros <strong className='text-blue-600'>ecosistemas acuáticos</strong>. 
            <br /><br />
            Este escenario educativo de <strong className='text-blue-600'>tres pisos</strong> alberga peces de agua dulce como 
            <strong className='text-blue-600'>arawanas</strong>, <strong className='text-blue-600'>tucunarés</strong>, 
            <strong className='text-blue-600'>cachamas</strong>, <strong className='text-blue-600'>bagres</strong> y 
            <strong className='text-blue-600'>pirarucús</strong>, los más grandes en los ríos de Suramérica. También nadan allí, 
            <strong className='text-blue-600'>peces payaso</strong>, <strong className='text-blue-600'>morenas</strong>, 
            <strong className='text-blue-600'>anémonas</strong>, <strong className='text-blue-600'>medusas</strong>, 
            <strong className='text-blue-600'>erizos</strong>, <strong className='text-blue-600'>estrellas de mar</strong> 
            y otros organismos de <strong className='text-blue-600'>agua salada</strong>. El Acuario subraya la <strong className='text-blue-600'>
            vida en su esplendor</strong> y, también, en su <strong className='text-blue-600'>fragilidad</strong>. 
          </p>
        </div>

        <div className='relative flex-1 p-6'>
          <img 
            src={currentImage} 
            alt="Acuario" 
            className='w-full h-auto transition-transform transform rounded-lg shadow-2xl hover:scale-105'
          />

          <div className='absolute flex gap-4 transform -translate-x-1/2 bottom-4 left-1/2'>
            <button 
              onClick={() => showImage(0)} 
              className='flex items-center p-3 text-white transition bg-blue-600 rounded-full shadow-lg hover:bg-blue-700'
            >
              <FontAwesomeIcon icon={faArrowLeft} className='text-2xl' />
            </button>
            <button 
              onClick={() => showImage(1)} 
              className='flex items-center p-3 text-white transition bg-blue-600 rounded-full shadow-lg hover:bg-blue-700'
            >
              <FontAwesomeIcon icon={faArrowRight} className='text-2xl' />
            </button>
          </div>
        </div>
      </section>

      <div className='flex justify-center mb-6'>
        <h3 className='text-2xl font-bold'>Calificación</h3>
        <div className='flex space-x-1 ml-4'>
          {[...Array(5)].map((_, index) => (
            <span 
              key={index} 
              className={`cursor-pointer text-2xl ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
              onClick={() => setRating(index + 1)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      
      <section id="contact" className='p-6 mt-12 bg-blue-100 rounded-lg shadow-lg'>
        <h2 className='mb-6 text-3xl font-bold text-gray-800'>Contáctanos</h2>
        <p className='mb-4 text-lg text-gray-700'>
          Si tienes alguna pregunta o deseas más información, no dudes en ponerte en contacto con nosotros.
        </p>
        <form className='space-y-4'>
          <div>
            <label htmlFor="name" className='block text-gray-700'>Nombre</label>
            <input 
              type="text" 
              id="name" 
              className='w-full p-3 border rounded-lg'
              placeholder="Tu nombre"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className='block text-gray-700'>Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              className='w-full p-3 border rounded-lg'
              placeholder="Tu correo electrónico"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className='block text-gray-700'>Mensaje</label>
            <textarea 
              id="message" 
              rows="4" 
              className='w-full p-3 border rounded-lg'
              placeholder="Tu mensaje"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className='px-6 py-3 text-white transition bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700'
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}