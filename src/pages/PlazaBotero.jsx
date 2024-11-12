import React, { useState } from 'react';
import plazaBotero from '../assets/Plaza-Botero.webp';
import esculturas from '../PlazaBotero/Esculturas.webp';
import NavBar from '../components/NavBar';
import ImageSlider from '../components/ImageSlider';
import Rating from '../components/Rating';
import ContactForm from '../components/ContactForm';

export default function PlazaBotero() {
  const [currentImage, setCurrentImage] = useState(plazaBotero);
  const [rating, setRating] = useState(0);
  const images = [plazaBotero, esculturas];
  const entity_Id="Plaza de Botero";

  return (
    <div className='bg-gray-100 min-h-screen p-6'>
      <NavBar />

      <div className='relative mb-12'>
        <img 
          src={plazaBotero}
          alt="Plaza de Botero Hero"
          className='h-96 w-full object-cover brightness-50 rounded-lg shadow-lg'
        />
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-extrabold bg-black bg-opacity-60 p-6 rounded-lg shadow-2xl cursor-default'>
          Plaza de Botero
        </h1>
      </div>

      <section id="main-content" className='flex flex-col md:flex-row gap-6 mb-12'>
        <div className='flex-1 p-6 bg-white rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold mb-6 text-gray-800 cursor-default'>Descubre la Plaza de Botero</h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            La Plaza de Botero es un emblemático espacio público en Medellín, que alberga una colección 
            impresionante de esculturas del famoso artista Fernando Botero. Este lugar vibrante y colorido 
            es ideal para disfrutar del arte al aire libre y conocer más sobre la cultura local.
            <br /><br />
            <strong className='text-blue-700'>Esculturas de Botero:</strong> La plaza cuenta con varias 
            esculturas icónicas que reflejan el estilo único de Botero, caracterizado por sus formas 
            voluminosas y expresivas.
            <br /><br />
            <strong className='text-blue-700'>Cultura y Arte:</strong> Además de las esculturas, la plaza 
            está rodeada de museos y galerías que ofrecen una visión más profunda de la escena artística de 
            Medellín.
            <br /><br />
            <strong className='text-blue-700'>Eventos Culturales:</strong> A lo largo del año, la plaza 
            acoge diversas actividades culturales y artísticas, lo que la convierte en un punto de encuentro 
            vibrante para los locales y turistas.
          </p>
        </div>

        <div className='flex-1 p-6 relative'>
          <ImageSlider images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} />
        </div>
      </section>

      <Rating entityId={entity_Id} userId="000000" rating={rating} setRating={setRating} />

      <ContactForm />  
    </div>
  );
}