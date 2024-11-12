import React, { useState } from 'react';
import guatape from '../Guatape/piedraPeñol.jpg';
import represaGuatape from '../Guatape/represaGuatape.webp';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ImageSlider from '../components/ImageSlider';
import Rating from '../components/Rating';
import ContactForm from '../components/ContactForm';

export default function Guatape() {
  const [currentImage, setCurrentImage] = useState(guatape);
  const [rating, setRating] = useState(0); // Define rating state
  const navigate = useNavigate();
  const entity_Id="Guatapé";

  const images = [guatape, represaGuatape]; // Array of images
  const showImage = (index) => setCurrentImage(images[index]);

  return (
    <div className='bg-gray-100 min-h-screen p-6'>
      <NavBar />

      <div className='relative mb-12'>
        <img 
          src={guatape}
          alt="Guatapé Hero"
          className='h-96 w-full object-cover brightness-50 rounded-lg shadow-lg'
        />
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-extrabold bg-black bg-opacity-60 p-6 rounded-lg shadow-2xl cursor-default'>
          Guatapé
        </h1>
      </div>

      <section id="main-content" className='flex flex-col md:flex-row gap-6 mb-12'>
        <div className='flex-1 p-6 bg-white rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold mb-6 text-gray-800 cursor-default'>Descubre Guatapé</h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            Guatapé es un encantador pueblo ubicado en el departamento de Antioquia, conocido por su vibrante 
            arquitectura colorida y su impresionante entorno natural. Aquí encontrarás varios puntos de interés 
            que hacen de este destino un lugar único para explorar.
            <br /><br />
            <strong className='text-blue-700'>Piedra del Peñol:</strong> Este monolito gigante ofrece una vista panorámica 
            espectacular de los alrededores. Subir sus 740 escalones es un desafío que recompensa con una vista 
            inolvidable del embalse de Guatapé y sus islas.
            <br /><br />
            <strong className='text-blue-700'>Represa de Guatapé:</strong> Una maravilla de ingeniería, esta represa 
            crea un paisaje impresionante con sus aguas turquesas. Es ideal para actividades acuáticas y paseos en bote.
            <br /><br />
            <strong className='text-blue-700'>Pueblo Colorido:</strong> Las calles de Guatapé están decoradas con 
            coloridos zócalos que reflejan la rica cultura y tradiciones locales. Es un lugar perfecto para pasear y 
            capturar la esencia del lugar.
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