import React, { useState } from 'react';
import jardinBotanico from '../JardinBotanico/JardinBotanico.avif';
import plantas from '../JardinBotanico/Flor1.jpg';
import NavBar from '../components/NavBar';
import ImageSlider from '../components/ImageSlider';
import Rating from '../components/Rating';
import ContactForm from '../components/ContactForm';

export default function JardinBotanico() {
  const [currentImage, setCurrentImage] = useState(jardinBotanico);
  const [rating, setRating] = useState(0);
  const images = [jardinBotanico, plantas];
  const entity_Id = 'Jardín Botánico';

  return (
    <div className='bg-gray-100 min-h-screen p-6'>
      <NavBar />

      <div className='relative mb-12'>
        <img 
          src={jardinBotanico}
          alt="Jardín Botánico Hero"
          className='h-96 w-full object-cover brightness-50 rounded-lg shadow-lg'
        />
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-extrabold bg-black bg-opacity-60 p-6 rounded-lg shadow-2xl cursor-default'>
          Jardín Botánico
        </h1>
      </div>

      <section id="main-content" className='flex flex-col md:flex-row gap-6 mb-12'>
        <div className='flex-1 p-6 bg-white rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold mb-6 text-gray-800 cursor-default'>Descubre el Jardín Botánico</h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            El Jardín Botánico es un lugar de paz y belleza natural, donde puedes explorar una amplia variedad de 
            plantas y flores. Es el lugar perfecto para los amantes de la naturaleza y aquellos que buscan un 
            escape de la vida urbana.
            <br /><br />
            <strong className='text-blue-700'>Colección de Plantas:</strong> Aquí encontrarás una impresionante 
            colección de plantas nativas y exóticas, organizadas en diferentes secciones que reflejan su hábitat 
            natural.
            <br /><br />
            <strong className='text-blue-700'>Senderos y Áreas Recreativas:</strong> Disfruta de un paseo a través 
            de los hermosos senderos que atraviesan el jardín, ideales para caminar, hacer picnics o simplemente 
            relajarte.
            <br /><br />
            <strong className='text-blue-700'>Eventos Educativos:</strong> Participa en talleres y charlas que 
            promueven la conservación y la apreciación del medio ambiente.
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