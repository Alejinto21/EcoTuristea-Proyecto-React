import React, { useState } from 'react';
import login from '../assets/login.jpeg';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='flex min-h-screen'>

      <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
        <nav className='bg-slate-100 text-black p-4 w-full flex-shrink-0 items-center flex'>
          <img src={logo} className='w-12 rounded-full mr-4' alt="Logo" />
          <h1 className='text-3xl font-semibold'>EcoTuristea</h1>
        </nav>

        <div className='flex-1 flex items-center justify-center bg-green- p-8 w-full'>
          <div className='max-w-md w-full'>
            <h2 className='text-5xl font-bold text-gray-800 mb-6 text-center'>Iniciar Sesión</h2>
            <p className='mb-8 text-slate-400 text-center text-xl'>Bienvenido, para continuar digita tus credenciales</p>
            <form className='space-y-6'>
              <div>
                <label htmlFor="username" className='block text-gray-700 text-xl mb-2'>Usuario</label>
                <input 
                  type="text" 
                  id="username" 
                  className='w-full p-4 border border-gray-300 rounded-lg text-xl'
                  placeholder="Ingresar usuario"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className='block text-gray-700 text-xl mb-2'>Contraseña</label>
                <input 
                  type="password" 
                  id="password" 
                  className='w-full p-4 border border-gray-300 rounded-lg text-xl'
                  placeholder="Ingresar contraseña"
                  required
                />
              </div>
              <p className='text-xs text-right cursor-pointer' onClick={handleModalToggle}>¿Olvidaste la contraseña?</p>
              <button 
                className='px-8 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition text-xl w-full h-14' 
                type="submit" 
                onClick={() => navigate("/paginaPrincipal")}
              >
                Iniciar Sesión
              </button>
              <div className='flex items-center justify-center'>
                <p className='text-sm flex justify-center mr-1 text-gray-500 cursor-default'>¿No tienes cuenta?</p>
                <p className='text-sm text-blue-900 cursor-pointer' onClick={() => navigate("/register")}>Regístrate</p>
              </div>
            </form>
          </div>
        </div>
      </div>


      <div className='hidden md:hidden lg:block lg:w-1/2'>
        <img 
          src={login}
          alt="Imagen descriptiva" 
          className='w-full h-full object-cover '
        />
      </div>

      {/* Modal para recuperar contraseña */}
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-sm w-full'>
            <h2 className='text-xl font-bold mb-4'>Recuperar Contraseña</h2>
            <p className='mb-4'>Ingresa tu correo electrónico para recibir instrucciones sobre cómo recuperar tu contraseña.</p>
            <input 
              type="email" 
              className='w-full p-2 border border-gray-300 rounded-lg mb-4'
              placeholder="Correo electrónico"
            />
            <div className='flex justify-end'>
              <button 
                className='px-4 py-2 bg-blue-600 text-white rounded-lg'
                onClick={handleModalToggle}
              >
                Enviar
              </button>
              <button 
                className='ml-2 px-4 py-2 bg-gray-300 rounded-lg'
                onClick={handleModalToggle}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
