import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import login from '../assets/login.jpeg';
import logo from '../assets/logo.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password
      });
      if (response.data.success) {
        Swal.fire({
          title: 'Registro exitoso',
          text: 'Has iniciado sesión exitosamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          navigate("/paginaPrincipal");
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: response.data.message,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Error en la autenticación. Intenta de nuevo.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <nav className='bg-white shadow-md text-black p-4 w-full flex-shrink-0 flex items-center'>
        <img src={logo} className='w-12 h-12 rounded-full mr-4' alt="Logo" />
        <h1 className='text-3xl font-semibold text-green-600'>EcoTuristea</h1>
      </nav>
      <div className='flex flex-1 flex-col md:flex-row'>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-100'>
          <div className='flex-1 flex items-center justify-center p-8 w-full'>
            <div className='max-w-md w-full'>
              <h2 className='text-4xl font-bold text-green-800 mb-6 text-center'>Iniciar Sesión</h2>
              <p className='mb-8 text-gray-600 text-center text-sm'>Bienvenido, para continuar digita tus credenciales</p>
              <form className='space-y-6' onSubmit={handleLogin}>
                <div>
                  <label htmlFor="username" className='block text-gray-700 text-sm mb-2'>Usuario</label>
                  <input
                    type="text"
                    id="username"
                    className='w-full p-3 border border-gray-300 rounded-lg text-sm'
                    placeholder="Ingresar usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className='relative'>
                  <label htmlFor="password" className='block text-gray-700 text-sm mb-2'>Contraseña</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className='w-full p-3 border border-gray-300 rounded-lg text-sm'
                    placeholder="Ingresar contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className='absolute inset-y-0 right-0 pr-3 pt-7 flex items-center justify-center'>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className='text-gray-600 focus:outline-none focus:text-gray-800'
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                <p className='text-xs text-blue-600 text-right cursor-pointer' onClick={handleModalToggle}>¿Olvidaste la contraseña?</p>
                <button
                  className='px-8 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition text-xl w-full h-14'
                  type="submit"
                >
                  Iniciar Sesión
                </button>
                <div className='flex items-center justify-center mt-4'>
                  <p className='text-sm text-gray-600'>¿No tienes cuenta?</p>
                  <p className='text-sm text-blue-600 ml-1 cursor-pointer' onClick={() => navigate("/register")}>Regístrate</p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='hidden lg:flex lg:w-1/2 justify-center items-center mr-12 bg-[#f3f4f6]'>
          <img
            src={login}
            alt="Imagen descriptiva"
            className='w-full h-3/4 object-cover'
          />
        </div>
      </div>
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
                className='px-4 py-2 bg-green-600 text-white rounded-lg'
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
