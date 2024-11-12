import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/exploraMasSitios.css';
import montana from '../assets/medellin.jpg';
import { addComment } from '../services/api';
import NavBar from '../components/NavBar';
import ContactForm from '../components/ContactForm';

export default function SobreNosotros() {
  const navigate = useNavigate();
  const [themeVisible, setThemeVisible] = useState(false);

  const toggleThemeIcons = () => setThemeVisible(!themeVisible);

  const [formData, setFormData] = useState({
    nombre: '',
    correo_electronico: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addComment(formData);
      alert(response.message);
      setFormData({
        nombre: '',
        correo_electronico: '',
        mensaje: ''
      });
    } catch (error) {
      console.error('Error al enviar el comentario:', error);
      alert('Hubo un problema al enviar el comentario.');
    }
  };

  return (
    <div>
      <NavBar />

      <div className='relative mb-12'>
        <img 
          src={montana} 
          alt="Sobre Nosotros Hero"
          className='h-96 w-full object-cover brightness-50 rounded-lg shadow-lg'
        />
        
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-extrabold bg-black bg-opacity-60 p-6 rounded-lg shadow-2xl cursor-default'>
          Sobre Nosotros
        </h1>
      </div>

      <section id="main-content" className='flex flex-col md:flex-row gap-6 mb-12'>
        <div className='flex-1 p-6 bg-white rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold mb-6 text-gray-800 cursor-default'>Quiénes Somos</h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            EcoTuristea es una plataforma que promueve el turismo sostenible en Medellín y sus alrededores. Nos enfocamos en ofrecer experiencias únicas que respetan el medio ambiente y apoyan a las comunidades locales. 
          </p>
        </div>

        <div className='flex-1 p-6 bg-white rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold mb-6 text-gray-800 cursor-default'>Nuestro Compromiso</h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            En EcoTuristea, promovemos un turismo responsable. Trabajamos con guías locales, minimizamos nuestro impacto ambiental, y educamos a nuestros viajeros sobre la importancia de cuidar el planeta y las culturas que visitamos.
          </p>
        </div>
      </section>


        <ContactForm /> 

    </div>
  );
}
