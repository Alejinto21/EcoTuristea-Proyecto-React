import React, { useState } from 'react';
import pueblitoPaisa from '../assets/imgPueblito.jpg';
import plazaPueblito from '../assets/pueblitoPaisa.jpeg'
import NavBar from '../components/NavBar';
import ImageSlider from '../components/ImageSlider';
import Rating from '../components/Rating';
import ContactForm from '../components/ContactForm';

export default function PueblitoPaisa() {
  const [currentImage, setCurrentImage] = useState(pueblitoPaisa);
  const [rating, setRating] = useState(0);
  const images = [pueblitoPaisa,plazaPueblito];

  return (
    <div className='bg-gray-100 min-h-screen p-6'>
      <NavBar />

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

        <div className='flex-1 p-6 bg-white rounded-lg shadow-lg'>
          <ImageSlider images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} />
        </div>
      </section>

      <Rating rating={rating} setRating={setRating} />

      <ContactForm />
    </div>
  );
}
