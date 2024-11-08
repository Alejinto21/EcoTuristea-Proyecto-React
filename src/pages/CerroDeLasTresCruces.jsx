import React, { useState } from 'react';
import cerroTresCruces from '../assets/Cerro.jpeg';
import vistaDesdeCerro from '../CerroDeLasTresCruces/vista.webp';
import NavBar from '../components/NavBar';
import ImageSlider from '../components/ImageSlider';
import Rating from '../components/Rating';
import ContactForm from '../components/ContactForm';
export default function CerroTresCruces() {
  const [rating, setRating] = useState(0);
  const [currentImage, setCurrentImage] = useState(cerroTresCruces);
  const images = [cerroTresCruces, vistaDesdeCerro];

  return (
    <div className='bg-gray-100 min-h-screen p-6'>
      <NavBar />

      <div className='relative mb-12'>
        <img 
          src={cerroTresCruces}
          alt="Cerro de las Tres Cruces Hero"
          className='h-96 w-full object-cover brightness-50 rounded-lg shadow-lg'
        />
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-extrabold bg-black bg-opacity-60 p-6 rounded-lg shadow-2xl cursor-default'>
          Cerro de las Tres Cruces
        </h1>
      </div>

      <section id="main-content" className='flex flex-col md:flex-row gap-6 mb-12'>
        <div className='flex-1 p-6 bg-white rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold mb-6 text-gray-800 cursor-default'>Descubre el Cerro de las Tres Cruces</h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            El Cerro de las Tres Cruces es un lugar icónico en Medellín, conocido por sus impresionantes vistas 
            de la ciudad. Este cerro es popular entre los senderistas y aquellos que buscan un momento de paz 
            en medio de la naturaleza.
            <br /><br />
            <strong className='text-blue-700'>Senderismo:</strong> La caminata hacia la cima es un reto que 
            recompensa a los aventureros con panoramas espectaculares de Medellín y sus alrededores.
            <br /><br />
            <strong className='text-blue-700'>Cruz de la Cima:</strong> En la cima se encuentra una gran cruz 
            que se ha convertido en un símbolo de fe y esperanza para los habitantes de la ciudad.
            <br /><br />
            <strong className='text-blue-700'>Naturaleza:</strong> Rodeado de vegetación y aves, el cerro es 
            perfecto para disfrutar de la biodiversidad de la región.
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
