import React, { useState } from 'react';
import Acuario from '../ParqueExplora/Acuario.jpg';
import colombia from '../assets/parqueExplora.webp';
import Pez1 from '../ParqueExplora/Pez1.jpg'; 
import NavBar from '../components/NavBar';
import ImageSlider from '../components/ImageSlider';
import Rating from '../components/Rating';
import ContactForm from '../components/ContactForm';

export default function ParqueExplora() {
  const [currentImage, setCurrentImage] = useState(Acuario);
  const [rating, setRating] = useState(0);
  const entity_Id="Parque Explora";
  const images = [Acuario, Pez1]; // Array of images

  return (
    <div className='min-h-screen p-6 bg-white'>

      <NavBar />
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
            <strong className='text-blue-600'>Más de dos mil peces</strong> de unas <strong className='text-blue-600'>250 especies </strong> 
            habitan el <strong className='text-blue-600'>Acuario Explora</strong>, un espacio dedicado a la 
            <strong className='text-blue-600'> educación, conservación e investigación</strong> de la vida que 
            recrea <strong className='text-blue-600'>ríos</strong>, <strong className='text-blue-600'>selvas amazónicas inundadas</strong>, 
            <strong className='text-blue-600'>arrecifes de coral</strong> y otros <strong className='text-blue-600'>ecosistemas acuáticos</strong>. 
            <br /><br />
            Este escenario educativo de <strong className='text-blue-600'>tres pisos</strong> alberga peces de agua dulce como 
            <strong className='text-blue-600'> arawanas</strong>, <strong className='text-blue-600'> tucunarés</strong>, 
            <strong className='text-blue-600'> cachamas</strong>, <strong className='text-blue-600' > bagres</strong> y 
            <strong className='text-blue-600'>pirarucús</strong>, los más grandes en los ríos de Suramérica. También nadan allí, 
            <strong className='text-blue-600'> peces payaso</strong>, <strong className='text-blue-600'> morenas</strong>, 
            <strong className='text-blue-600'> anémonas</strong>, <strong className='text-blue-600'> medusas</strong>, 
            <strong className='text-blue-600'> erizos</strong>, <strong className='text-blue-600'>estrellas de mar</strong> 
            y otros organismos de <strong className='text-blue-600'>agua salada</strong>. El Acuario subraya la <strong className='text-blue-600'>
            vida en su esplendor</strong> y, también, en su <strong className='text-blue-600'>fragilidad</strong>. 
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