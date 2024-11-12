import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/navBar.css'

export default function NavBar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Cambia el estado del menú (abre o cierra)
    };

    return (
        <nav className='navE'>
            <h1 className='Eco'>EcoTuristea</h1>
            {/* Menú hamburguesa para pantallas pequeñas */}
            <div className="menu-hamburguesa" onClick={toggleMenu}>
                <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i> {/* Cambia el ícono entre hamburguesa y cruz */}
            </div>

            {/* El menú solo es visible si 'menuOpen' es true */}
            <ul className={`menu-items ${menuOpen ? 'active' : ''}`}>
                <li className='inicio1' onClick={() => navigate("/exploraMasSitios")}>Inicio</li>
                <li className='sobreNosotros2' onClick={() => navigate("/sobreNosotros")}>Sobre Nosotros</li>
                
                {/* Opción de Salir dentro del menú */}
                <li className='salir' onClick={() => navigate("/login")}>
                    <i className='bx bx-exit'></i>
                    <p>Salir</p>
                </li>
            </ul>
        </nav>
    );
}
