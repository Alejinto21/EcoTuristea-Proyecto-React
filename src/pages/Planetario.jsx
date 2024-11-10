import React, { useState } from 'react';
import planetario from '../assets/Planetario.jpg';
import telescopio from '../assets/Telescopio.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Planetario() {
  const [currentImage, setCurrentImage] = useState(planetario);
  const [rating, setRating] = useState(0); // Define rating state
  const navigate = useNavigate();

  const images = [planetario, telescopio]; // Array of images
  const showImage = (index) => setCurrentImage(images[index]);

  return (
    <div className='bg-gray-100 min-h-screen p-6'>
      <nav className='navE'>
        <h1 className='Eco'>EcoTuristea</h1>
        <ul>
          <li className='inicio1' onClick={()=> navigate ('/exploraMasSitios')}>Inicio</li>
          <li className='sobreNosotros2' onClick={()=> navigate ('/sobreNosotros')}>Sobre Nosotros</li>
          <li className='Tema3'>Tema</li>
        </ul>
        <div className='salir'>
          <i className='bx bx-exit'></i>
          <p>Salir</p>
        </div>
      </nav>

      <div className='relative mb-12'>
        <img 
          src={planetario}
          alt="Planetario de Medellín"
          className='h-96 w-full object-cover brightness-50 rounded-lg shadow-lg'
        />
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-extrabold bg-black bg-opacity-60 p-6 rounded-lg shadow-2xl cursor-default'>
          Planetario de Medellín
        </h1>
      </div>

      <section id="main-content" className='flex flex-col md:flex-row gap-6 mb-12'>
        <div className='flex-1 p-6 bg-white rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold mb-6 text-gray-800 cursor-default'>Descubre el Planetario de Medellín</h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            El Planetario de Medellín es un espacio fascinante dedicado a la divulgación científica y a la observación del cosmos. Aquí encontrarás diversas actividades que hacen de este lugar un destino imperdible para los amantes de la ciencia y el espacio.
            <br /><br />
            <strong className='text-blue-700'>Exposiciones Interactivas:</strong> Disfruta de exhibiciones que te sumergirán en el fascinante mundo del universo, desde el sistema solar hasta los misterios del espacio profundo.
            <br /><br />
            <strong className='text-blue-700'>Funciones de Planetario:</strong> Vive experiencias inmersivas en la sala de proyección, donde podrás observar el cielo estrellado y aprender sobre los astros.
            <br /><br />
            <strong className='text-blue-700'>Talleres y Charlas:</strong> Participa en actividades educativas diseñadas para todas las edades que fomentan la curiosidad y el conocimiento sobre el universo.
          </p>
        </div>

        <div className='flex-1 p-6 relative'>
          <img 
            src={currentImage}
            alt="Planetario"
            className='w-full h-auto rounded-lg shadow-2xl transition-transform transform hover:scale-105'
          />

          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4'>
            <button 
              onClick={() => showImage(0)} 
              className='p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition flex items-center'
            >
              <FontAwesomeIcon icon={faArrowLeft} className='text-2xl' />
            </button>
            <button 
              onClick={() => showImage(1)} 
              className='p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition flex items-center'
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

      <section id="contact" className='bg-blue-100 p-6 rounded-lg shadow-lg mt-12'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>Contáctanos</h2>
        <p className='text-lg text-gray-700 mb-4'>
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
            />
          </div>
          <div>
            <label htmlFor="email" className='block text-gray-700'>Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              className='w-full p-3 border rounded-lg'
              placeholder="Tu correo electrónico"
            />
          </div>
          <div>
            <label htmlFor="message" className='block text-gray-700'>Mensaje</label>
            <textarea 
              id="message" 
              rows="4" 
              className='w-full p-3 border rounded-lg'
              placeholder="Tu mensaje"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className='px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition'> 
            Enviar 
          </button>
        </form>
      </section>  
    </div>
  );
}
