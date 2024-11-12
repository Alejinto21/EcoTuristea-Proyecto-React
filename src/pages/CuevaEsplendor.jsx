import React, { useState } from 'react';
import cuevaEsplendor from '../assets/Cueva.webp';
import interiorCueva from '../CuevaEsplendor/Interior.jpeg';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ImageSlider from '../components/ImageSlider';
import Rating from '../components/Rating';
import ContactForm from '../components/ContactForm';

export default function CuevaDelEsplendor() {
  const [currentImage, setCurrentImage] = useState(cuevaEsplendor);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const entity_Id="Cueva del Esplendor";

  const images = [cuevaEsplendor, interiorCueva];
  const showImage = (index) => setCurrentImage(images[index]);

  return (
    <div className='bg-gray-100 min-h-screen p-6'>
      <NavBar />

      <div className='relative mb-12'>
        <img 
          src={cuevaEsplendor}
          alt="Cueva del Esplendor Hero"
          className='h-96 w-full object-cover brightness-50 rounded-lg shadow-lg'
        />
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-extrabold bg-black bg-opacity-60 p-6 rounded-lg shadow-2xl cursor-default'>
          Cueva del Esplendor
        </h1>
      </div>

      <section id="main-content" className='flex flex-col md:flex-row gap-6 mb-12'>
        <div className='flex-1 p-6 bg-white rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold mb-6 text-gray-800 cursor-default'>Descubre la Cueva del Esplendor</h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            La Cueva del Esplendor es un destino mágico ubicado en el corazón de la naturaleza. Conocida por su 
            impresionante belleza y su ambiente sereno, es un lugar ideal para los amantes de la aventura y 
            la exploración.
            <br /><br />
            <strong className='text-blue-700'>Aventuras en la Cueva:</strong> La cueva ofrece recorridos 
            emocionantes donde puedes explorar formaciones rocosas únicas y disfrutar de sus aguas cristalinas.
            <br /><br />
            <strong className='text-blue-700'>Biodiversidad:</strong> Este lugar es hogar de diversas especies 
            de flora y fauna, lo que lo convierte en un destino ideal para los amantes de la naturaleza.
            <br /><br />
            <strong className='text-blue-700'>Relajación:</strong> La Cueva del Esplendor es perfecta para 
            desconectar y disfrutar de la tranquilidad de la naturaleza.
          </p>
        </div>

        <div className='flex-1 p-6 bg-white rounded-lg shadow-lg'>
          <ImageSlider images={images} currentImage={currentImage} showCurrentImage={showImage} />
        </div>
      </section>

      <Rating entityId={entity_Id} userId="000000" rating={rating} setRating={setRating} />

      <ContactForm />  
    </div>
  );
}