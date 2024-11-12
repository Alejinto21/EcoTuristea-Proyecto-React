import React, { useState } from 'react';
import planetario from '../assets/Planetario.jpg';
import telescopio from '../assets/Telescopio.png';
import NavBar from '../components/NavBar';
import ImageSlider from '../components/ImageSlider';
import Rating from '../components/Rating';
import ContactForm from '../components/ContactForm';

export default function Planetario() {
  const [currentImage, setCurrentImage] = useState(planetario);
  const [rating, setRating] = useState(0); 
  const images = [planetario, telescopio];
  const entity_Id="Planetario de Medellín";
  
  return (
    <div className='bg-gray-100 min-h-screen p-6'>
      <NavBar />

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

        <div className='flex-1 p-6 bg-white rounded-lg shadow-lg'>
          <ImageSlider images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} />
        </div>
      </section>

      <Rating entityId={entity_Id} userId="000000" rating={rating} setRating={setRating} />

      <ContactForm />
    </div>
  );
}
