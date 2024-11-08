import React, { useState } from 'react';
import parqueArvi from '../assets/ParqueArvi.jpg'; 
import senderoParqueArvi from '../ParqueArvi/SenderoParqueArvi.webp'; 
import NavBar from '../components/NavBar';
import ImageSlider from '../components/ImageSlider';
import Rating from '../components/Rating';
import ContactForm from '../components/ContactForm';

export default function ParqueArvi() {
  const [currentImage, setCurrentImage] = useState(parqueArvi);
  const [rating, setRating] = useState(0);

  return (
    <div className='bg-gray-100 min-h-screen p-6'>
      <NavBar />

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
          <ImageSlider images={[parqueArvi, senderoParqueArvi]} currentImage={currentImage} setCurrentImage={setCurrentImage} />
        </div>
      </section>

      <Rating rating={rating} setRating={setRating} />

      <ContactForm />
    </div>
  );
}