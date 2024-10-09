import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/exploraMasSitios.css';
import montana from '../assets/medellin.webp';

export default function SobreNosotros() {
  const navigate = useNavigate();
  const [themeVisible, setThemeVisible] = useState(false); // State for theme visibility

  const toggleThemeIcons = () => setThemeVisible(!themeVisible); // Function to toggle theme icons

  return (
    <div className='bg-gray-100 min-h-screen p-6'>
      <nav className='navE'>
        <h1 className='Eco'>EcoTuristea</h1>
        <ul>
          <li className='inicio1' onClick={() => navigate("/exploraMasSitios")}>Inicio</li>
          <li className='sobreNosotros2' onClick={() => navigate("/sobreNosotros")}>Sobre Nosotros</li>
          <li className='Tema3'>
            Tema
            <span onClick={toggleThemeIcons} style={{ marginLeft: '5px', cursor: 'pointer' }}>
              <i className='bx bx-chevron-down'></i>
            </span>
            {themeVisible && (
              <div className='theme-icons'>
                <i className='bx bxs-sun' style={{ fontSize: '20px', marginLeft: '10px' }}></i>
                <i className='bx bxs-moon' style={{ fontSize: '20px', marginLeft: '5px' }}></i>
              </div>
            )}
          </li>
        </ul>
        <div className='salir' onClick={() => navigate("/login")}>
          <i className='bx bx-exit'></i>
          <p>Salir</p>
        </div>
      </nav>

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
            EcoTuristea es una plataforma dedicada a promover el turismo sostenible en Medellín y sus alrededores. Nuestro objetivo es ofrecer a los viajeros experiencias únicas que respeten el medio ambiente y apoyen a las comunidades locales.
            <br /><br />
            <strong className='text-blue-600'>Nuestra Misión:</strong> Conectar a los turistas con destinos naturales y culturales, fomentando un turismo responsable y consciente.
            <br /><br />
            <strong className='text-blue-600'>Nuestra Visión:</strong> Ser líderes en el turismo sostenible en Colombia, promoviendo prácticas que protejan el medio ambiente y mejoren la calidad de vida de las comunidades.
          </p>
        </div>

        <div className='flex-1 p-6 bg-white rounded-lg shadow-lg'>
          <h2 className='text-4xl font-bold mb-6 text-gray-800 cursor-default'>Nuestro Compromiso</h2>
          <p className='text-lg text-gray-700 leading-relaxed'>
            En EcoTuristea, nos comprometemos a:
            <ul className='list-disc pl-5'>
              <li className='mb-2'>Promover destinos que valoran la sostenibilidad.</li>
              <li className='mb-2'>Fomentar la educación ambiental entre nuestros viajeros.</li>
              <li className='mb-2'>Colaborar con empresas y guías locales para ofrecer experiencias auténticas.</li>
            </ul>
          </p>
        </div>
      </section>

      <section id="contact" className='p-6 mt-12 bg-blue-100 rounded-lg shadow-lg'>
        <h2 className='mb-6 text-3xl font-bold text-gray-800 cursor-default'>Contáctanos</h2>
        <p className='mb-4 text-lg text-gray-700'>
          Si deseas más información sobre nuestros servicios o quieres colaborar con nosotros, no dudes en ponerte en contacto.
        </p>
        <form className='space-y-4'>
          <div>
            <label htmlFor="name" className='block text-gray-700 mb-2'>Nombre</label>
            <input 
              type="text" 
              id="name" 
              className='w-full p-3 border border-gray-300 rounded-lg'
              placeholder="Tu nombre"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className='block text-gray-700 mb-2'>Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              className='w-full p-3 border border-gray-300 rounded-lg'
              placeholder="Tu correo electrónico"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className='block text-gray-700 mb-2'>Mensaje</label>
            <textarea 
              id="message" 
              rows="4" 
              className='w-full p-3 border border-gray-300 rounded-lg'
              placeholder="Tu mensaje"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className='w-full px-6 py-3 text-white transition bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700'
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}