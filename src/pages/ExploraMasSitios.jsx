import React, { useState } from 'react';
import '../styles/exploraMasSitios.css';
import 'boxicons/css/boxicons.min.css';
import medellin from '../assets/medellin.jpg';
import MuseoCastillo from '../assets/museoElCastillo.webp';
import ParqueArvi from '../assets/ParqueArvi.jpg';
import ParqueExplora from '../assets/ParqueExplora.webp';
import guatape from '../Guatape/piedraPeñol.jpg';
import jardinBotanico from '../assets/JardinBotanico.webp';
import PlazaBotero from '../assets/Plaza-Botero.webp';
import Cerro from '../assets/Cerro.jpeg';
import Cueva from '../assets/Cueva.webp';
import { useNavigate } from 'react-router-dom';
import PueblitoPaisa from '../assets/imgPueblito.jpg'; // Asegúrate de que la ruta sea correcta
import Planetario from '../assets/Planetario.jpg'; // Ajusta la ruta según la ubicación de tu imagen
import NavBar from '../components/NavBar';

export default function ExploraMasSitios() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Para manejar la búsqueda
  const navigate = useNavigate();

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase()); // Convertir a minúsculas para hacer una búsqueda insensible a mayúsculas
  };
  const sites = [
    {
      name: 'Museo El Castillo',
      description: 'El Museo el Castillo en Medellín es una impresionante edificación de estilo medieval...',
      image: MuseoCastillo,
      path: '/museoCastillo'
    },
    {
      name: 'Parque Arvi',
      description: 'El Parque Arví, situado en las montañas de Medellín, es un destino natural ideal...',
      image: ParqueArvi,
      path: '/parqueArvi'
    },
    {
      name: 'Parque Explora',
      description: 'El Parque Explora es un espacio interactivo en Medellín que combina ciencia...',
      image: ParqueExplora,
      path: '/parqueExplora'
    },
    {
      name: 'Guatapé',
      description: 'Guatapé, un vibrante pueblo en Colombia, es famoso por sus coloridas casas...',
      image: guatape,
      path: '/guatape'
    },
    {
      name: 'Jardin Botanico',
      description: 'El Jardín Botánico es un espacio de conservación y educación...',
      image: jardinBotanico,
      path: '/jardinBotanico'
    },
    {
      name: 'Plaza Botero',
      description: 'La Plaza de Botero en Medellín es un espacio público que exhibe esculturas...',
      image: PlazaBotero,
      path: '/plazaBotero'
    },
    {
      name: 'Cerro de las Tres Cruces',
      description: 'El Cerro de las Tres Cruces es un emblemático mirador en Cali...',
      image: Cerro,
      path: '/cerro'
    },
    {
      name: 'Cueva del Esplendor',
      description: 'La Cueva del Esplendor es una impresionante formación natural...',
      image: Cueva,
      path: '/cueva'
    },
    {
      name: 'Pueblito Paisa',
      description: 'El Pueblito Paisa es una encantadora recreación de la arquitectura antioqueña...',
      image: PueblitoPaisa,
      path: '/Pueblito'
    },
    {
      name: 'Planetario de Medellín',
      description: 'El Planetario de Medellín es un espacio dedicado a la divulgación científica...',
      image: Planetario,
      path: '/planetario'
    }
  ];

  // Filtrar sitios en base al texto de búsqueda
  const filteredSites = sites.filter(site => 
    site.name.toLowerCase().includes(searchQuery) || 
    site.description.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <NavBar />
      <section>
        <img className='medellin' src={medellin} alt="" />
        <div className='title'>
          <h1 className='sitios'>Sitios Turísticos</h1>
          <i className='bx bx-search' onClick={toggleSearch}></i>
        </div>
        <div className='searchInputs'>
          {searchVisible && (
            <input 
              type='text' 
              placeholder='Buscar...'
              className='searchInput'
              value={searchQuery}
              onChange={handleSearchChange}
            />
          )}
        </div>

        <div className='cards'>
          {filteredSites.map(site => (
            <div className='card' key={site.name}>
              <img className='' src={site.image} alt={site.name} />
              <h1 className='jardinBotanico'>{site.name}</h1>
              <p className='desParqueExplora'>{site.description}</p>
              <div className='btnCueva'>
                <button 
                  className='masInfoPlazaBotero' 
                  onClick={() => navigate(site.path)}
                >
                  Más Información
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <a href="#" className='volver'>Volver al Inicio</a>

      <footer className='footer'>
        <p>© 2024 EcoTuristea. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
