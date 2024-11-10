import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <nav className='navE'> 
            <h1 className='Eco'>EcoTuristea</h1>
            <ul>
                <li className='inicio1' onClick={() => navigate("/exploraMasSitios")}>Inicio</li>
                <li className='sobreNosotros2' onClick={() => navigate("/sobreNosotros")}>Sobre Nosotros</li>
                <li className='Tema3'>Tema</li>
            </ul>
            <div className='salir'>
                <i className='bx bx-exit'></i>
                <p>Salir</p>
            </div>
        </nav>
    );
}
