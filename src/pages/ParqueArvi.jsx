import React, { useState } from 'react';
import parqueArvi from '../assets/ParqueArvi.jpg'; 
import senderoParqueArvi from '../ParqueArvi/SenderoParqueArvi.webp'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function ParqueArvi() {
  const [currentImage, setCurrentImage] = useState(parqueArvi);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [themeVisible, setThemeVisible] = useState(false); // Added state for theme visibility
  const navigate = useNavigate();

  const toggleThemeIcons = () => setThemeVisible(!themeVisible); // Function to toggle theme icons

  const showParqueArvi = () => setCurrentImage(parqueArvi);
  const showSenderoParqueArvi = () => setCurrentImage(senderoParqueArvi);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (review.trim() && rating > 0) {
      setReviews([...reviews, { review, rating }]);
      setReview('');
      setRating(0);
    }
  };

  return (
    <div className='bg-gray-100 min-h-screen p-6'>

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

      <div className='relative mb-12'>
        <img 
          src={parqueArvi}
          alt="Parque Arví Hero"
          className='h-96 w-full object-cover brightness-50 rounded-lg shadow-lg'
        />
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-extrabold bg-black bg-opacity-60 p-6 rounded-lg shadow-2xl cursor-default'>
          Parque Arví
        </h1>
      </div>

      <section id="main-content" className='flex flex-col md:flex-row gap-6 mb-12'>
        <div className='flex-1 p-6 bg-white rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold mb-6 text-gray-800 cursor-default'>Descubre Parque Arví</h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            El Parque Arví es un lugar mágico situado en las montañas de Antioquia. Con su vasta biodiversidad y rutas de senderismo, es un destino ideal para los amantes de la naturaleza.
            <br /><br />
            <strong className='text-blue-600'>Senderos Naturales:</strong> El parque cuenta con una variedad de senderos que ofrecen vistas espectaculares y la oportunidad de observar flora y fauna locales.
            <br /><br />
            <strong className='text-blue-600'>Actividades al Aire Libre:</strong> Puedes disfrutar de paseos en bicicleta, caminatas y tours guiados para aprender más sobre la ecología del lugar.
            <br /><br />
            <strong className='text-blue-600'>Cultura Local:</strong> Además de la naturaleza, el parque también ofrece la posibilidad de conocer las tradiciones de las comunidades que lo rodean.
          </p>
        </div>

        <div className='flex-1 p-6 relative'>
          <img 
            src={currentImage}
            alt="Parque Arví"
            className='w-full h-auto rounded-lg shadow-2xl transition-transform transform hover:scale-105'
          />
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4'>
            <button 
              onClick={showParqueArvi} 
              className='p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-green-700 transition flex items-center'
            >
              <FontAwesomeIcon icon={faArrowLeft} className='text-2xl' />
            </button>
            <button 
              onClick={showSenderoParqueArvi} 
              className='p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-green-700 transition flex items-center'
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
        <h2 className='mb-6 text-3xl font-bold text-gray-800 cursor-default'>Contáctanos</h2>
        <p className='mb-4 text-lg text-gray-700'>
          Si tienes alguna pregunta o deseas más información, no dudes en ponerte en contacto con nosotros.
        </p>
        <form className='space-y-4' onSubmit={handleReviewSubmit}>
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