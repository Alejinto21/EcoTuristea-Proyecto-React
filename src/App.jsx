import React  from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Login from './pages/Login'
import PaginaPrincipal from './pages/PaginaPrincipal';
import ParqueExplora from './pages/ParqueExplora';
import Guatape from './pages/Guatape'
import Register from './pages/Register'
import ParqueArvi from './pages/ParqueArvi'
import MuseoCastillo from './pages/MuseoCastillo'
import ExploraMasSitios from './pages/ExploraMasSitios';
import SobreNosotros from './pages/SobreNosotros'
import JardinBotanico from './pages/JardinBotanico';
import PlazaBotero from './pages/PlazaBotero';
import CerroDeLasTresCruces from './pages/CerroDeLasTresCruces';
import CuevaDelEsplendor from './pages/CuevaEsplendor';

function App() {
  return (
      <Routes>
        <Route path= '/login' element={<Login/>} />
        <Route path= '/paginaPrincipal' element={<PaginaPrincipal/>}/>  
        <Route path= '/parqueExplora' element={<ParqueExplora/>}/>  
        <Route path= '/guatape' element={<Guatape/>}/>
        <Route path= '/register' element={<Register/>}/>
        <Route path= '/parqueArvi' element={<ParqueArvi/>}/>
        <Route path=  '/museoCastillo' element={<MuseoCastillo/>}/>
        <Route path= '/exploraMasSitios' element={<ExploraMasSitios/>}/>
        <Route path='/sobreNosotros' element={<SobreNosotros/>}/>
        <Route path='/jardinBotanico' element={<JardinBotanico/>}/>
        <Route path='/plazaBotero' element={<PlazaBotero/>}/>
        <Route path='/cerro' element={<CerroDeLasTresCruces/>}/>
        <Route path='/cueva' element={<CuevaDelEsplendor/>}/>
      </Routes>
  );
}

export default App;