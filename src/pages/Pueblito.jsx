import React, { useState } from 'react';
import pueblitoPaisa from '../assets/imgPueblito.jpg'; // Asegúrate de que la ruta sea correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function PueblitoPaisa() {
  const [currentImage, setCurrentImage] = useState(pueblitoPaisa);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const images = [pueblitoPaisa, /* Añade más imágenes si tienes */];
  const showImage = (index) => setCurrentImage(images[index]);

  return (
    <div className='bg-gray-100 min-h-screen p-6'>
      <nav className='navE'>
        <h1 className='Eco'>EcoTuristea</h1>
        <ul>
          <li className='inicio1' onClick={() => navigate('/exploraMasSitios')}>Inicio</li>
          <li className='sobreNosotros2' onClick={() => navigate('/sobreNosotros')}>Sobre Nosotros</li>
          <li className='Tema3'>Tema</li>
        </ul>
        <div className='salir' onClick={() => navigate('/login')}>
          <i className='bx bx-exit'></i>
          <p>Salir</p>
        </div>
      </nav>

      <div className='relative mb-12'>
        <img 
          src={pueblitoPaisa}
          alt="Pueblito Paisa Hero"
          className='h-96 w-full object-cover brightness-50 rounded-lg shadow-lg'
        />
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-extrabold bg-black bg-opacity-60 p-6 rounded-lg shadow-2xl cursor-default'>
          Pueblito Paisa
        </h1>
      </div>

      <section id="main-content" className='flex flex-col md:flex-row gap-6 mb-12'>
        <div className='flex-1 p-6 bg-white rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold mb-6 text-gray-800 cursor-default'>Descubre el Pueblito Paisa</h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            El Pueblito Paisa es una encantadora recreación de la arquitectura antioqueña, 
            situada en la cima del cerro Nutibara. Es un lugar ideal para disfrutar de vistas espectaculares y de la rica cultura local.
            <br /><br />
            <strong className='text-blue-700'>Arquitectura Auténtica:</strong> Con casas de tejas rojas y fachadas coloridas, 
            el Pueblito Paisa ofrece un viaje en el tiempo a la tradición paisa.
            <br /><br />
            <strong className='text-blue-700'>Gastronomía Local:</strong> Aquí puedes disfrutar de la deliciosa comida típica de la región.
            <br /><br />
            <strong className='text-blue-700'>Actividades:</strong> Visita los miradores, disfruta de las artesanías y 
            relájate en un entorno natural.
          </p>
        </div>

        <div className='flex-1 p-6 relative'>
          <img 
            src={currentImage}
            alt="Pueblito Paisa"
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