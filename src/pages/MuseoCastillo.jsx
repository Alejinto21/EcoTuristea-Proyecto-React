import React, { useState } from 'react';
import museoElCastillo from '../assets/museoElCastillo.webp'; 
import interiorMuseo from '../MuseoCastillo/InteriorCastillo.jpg'; 
import '../styles/exploraMasSitios.css';
import ImageSlider from '../components/ImageSlider';
import NavBar from '../components/NavBar';
import Rating from '../components/Rating';
import ContactForm from '../components/ContactForm';

export default function MuseoElCastillo() {
  const [currentImage, setCurrentImage] = useState(museoElCastillo);
  const [rating, setRating] = useState(0);
  const images = [museoElCastillo, interiorMuseo]; 

  return (
    <div className='bg-gray-100 min-h-screen p-6'>
      <NavBar />

      <div className='relative mb-12'>
        <img 
          src={museoElCastillo}
          alt="Museo El Castillo Hero"
          className='h-96 w-full object-cover brightness-50 rounded-lg shadow-lg'
        />
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-extrabold bg-black bg-opacity-60 p-6 rounded-lg shadow-2xl cursor-default'>
          Museo El Castillo
        </h1>
      </div>

      <section id="main-content" className='flex flex-col md:flex-row gap-6 mb-12'>
        <div className='flex-1 p-6 bg-white rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold mb-6 text-gray-800 cursor-default'>Descubre el Museo El Castillo</h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            El Museo El Castillo es un espacio cultural único en Medellín, conocido por su impresionante arquitectura y su rica colección de arte.
            <br /><br />
            <strong className='text-blue-600'>Arquitectura y Diseño:</strong> Este castillo neogótico ofrece un ambiente mágico, con jardines y áreas al aire libre que complementan su belleza.
            <br /><br />
            <strong className='text-blue-600'>Exposiciones:</strong> El museo alberga exposiciones permanentes y temporales de artistas locales e internacionales.
            <br /><br />
            <strong className='text-blue-600'>Actividades:</strong> Además de las visitas guiadas, el museo ofrece talleres y eventos culturales a lo largo del año.
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