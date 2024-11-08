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
  const [themeVisible, setThemeVisible] = useState(false);
  const navigate = useNavigate();

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleThemeIcons = () => {
    setThemeVisible(!themeVisible);
  };

  return (
    <div>
      <NavBar />

      <section>
        <img className='medellin' src={medellin} alt="" />
        <div className='title'>
          <h1 className='sitios'>Sitios Turisticos</h1>
          <i className='bx bx-search' onClick={toggleSearch}></i>
        </div>
        <div className='searchInputs'>
          {searchVisible && (
            <input 
              type='text' 
              placeholder='Buscar...'
              className='searchInput'
            />
          )}
        </div>

        <div className='cards'>
          <div className='card'>
            <img className='museoCastillo' src={MuseoCastillo} alt="" />
            <h1 className='museo'>Museo El Castillo</h1>
            <p className='desMuseo'>El Museo el Castillo en Medellín es una impresionante 
            edificación de estilo medieval que alberga una colección de 
            arte y ofrece hermosos jardines.</p>
            <div className='btnMuseo'>
              <button className='masInfoMuseo' onClick={() => navigate('/museoCastillo')}>Más Información</button>
            </div>
          </div>

          <div className='card'>
            <img className='imgParqueArvi' src={ParqueArvi} alt="" />
            <h1 className='parqueArvi'>Parque Arvi</h1>
            <p className='desParqueArvi'>El Parque Arví, situado en las montañas de Medellín, 
              es un destino natural ideal para disfrutar de senderos, biodiversidad y actividades 
              culturales.</p>
            <div className='btnParqueArvi'>
              <button className='masInfoParqueArvi' onClick={() => navigate('/parqueArvi')}>Más Información</button>
            </div>
          </div>

          <div className='card'>
            <img className='imgParqueExplora' src={ParqueExplora} alt="" />
            <h1 className='parqueExplora'>Parque Explora</h1>
            <p className='desParqueExplora'>El Parque Explora es un espacio interactivo en Medellín que combina 
              ciencia, tecnología y naturaleza, ofreciendo experiencias educativas.</p>
            <div className='btnParqueExplora'>
              <button className='masInfoParqueExplora' onClick={() => navigate('/parqueExplora')}>Más Información</button>
            </div>
          </div>

          {/* Segunda fila de tarjetas */}
          <div className='card'>
            <img className='imgGuatape' src={guatape} alt="" />
            <h1 className='plazaBotero'>Guatapé</h1>
            <p className='desPlazaBotero'>Guatapé, un vibrante pueblo en Colombia, es famoso por sus 
              coloridas casas y la imponente Piedra del Peñol que ofrece vistas espectaculares.</p>
            <div className='btnPlazaBotero'>
              <button className='masInfoPlazaBotero' onClick={() => navigate('/guatape')}>Más Información</button>
            </div>
          </div>

          <div className='card'>
            <img className='imgJardinBotanico' src={jardinBotanico} alt="" />
            <h1 className='jardinBotanico'>Jardin Botanico</h1>
            <p className='desParqueExplora'>El Jardín Botánico es un espacio de conservación y educación 
              donde se exhiben diversas especies de plantas en un entorno natural y armonioso.</p>
            <div className='btnJardinBotanico'>
              <button className='masInfoJardinBotanico' onClick={() => navigate('/jardinBotanico')}>Más Información</button>
            </div>
          </div>

          <div className='card'>
            <img className='imgPlazaBotero' src={PlazaBotero} alt="" />
            <h1 className='plazaBotero'>Plaza Botero</h1>
            <p className='desPlazaBotero'>La Plaza de Botero en Medellín es un espacio público que exhibe esculturas del 
              artista Fernando Botero, creando un vibrante encuentro cultural.</p>
            <div className='btnPlazaBotero'>
              <button className='masInfoPlazaBotero' onClick={() => navigate('/plazaBotero')}>Más Información</button>
            </div>
          </div>

          <div className='card'>
            <img className='imgCerro' src={Cerro} alt="" />
            <h1 className='cerro'>Cerro de las tres Cruces</h1>
            <p className='desCerro'>El Cerro de las Tres Cruces es un emblemático mirador en Cali que ofrece 
              impresionantes vistas de la ciudad.</p>
            <div className='btnCerro'>
              <button className='masInfoCerro' onClick={() => navigate('/cerro')}>Más Información</button>
            </div>
          </div>

            <div className='card'>
              <img className='imgCueva' src={Cueva} alt="" />
              <h1 className='cueva'>Cueva del Esplendor</h1>
              <p className='desCueva'>La Cueva del Esplendor es una impresionante formación natural en Colombia, 
                famosa por sus aguas cristalinas y su belleza escénica.</p>
              <div className='btnCueva'>
                <button className='masInfoCueva' onClick={() => navigate('/cueva')}>Más Información</button>
              </div>
            </div>

          <div className='card'>
            <img className='imgPueblito' src={PueblitoPaisa} alt="" />
            <h1 className='pueblito'>Pueblito Paisa</h1>
            <p className='desPueblito'>El Pueblito Paisa es una encantadora recreación de la arquitectura antioqueña, 
              situada en la cima del cerro Nutibara.</p>
          <div className='btnPueblito'>
            <button className='masInfoPueblito' onClick={() => navigate('/Pueblito')}>Más Información</button>
          </div>
        </div>

        <div className='card'>
          <img className='imgPlanetario' src={Planetario} alt="" /> {/* Asegúrate de importar la imagen correctamente */}
          <h1 className='planetario'>Planetario de Medellín</h1>
          <p className='desPlanetario'>El Planetario de Medellín es un espacio dedicado a la divulgación científica, donde puedes explorar el universo a través de exhibiciones interactivas.</p>
          <div className='btnPlanetario'>
          <button className='masInfoPlanetario' onClick={() => navigate('/planetario')}>Más Información</button>
        </div>
      </div>
        </div>  
      </section>
      <a href="#" className='volver'>Volver al Inicio</a>

      <footer className='footer'>
        <p>© 2024 EcoTuristea. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}