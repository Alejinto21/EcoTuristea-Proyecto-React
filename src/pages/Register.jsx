import React, { useState } from 'react';
import Swal from 'sweetalert2';
import login from '../assets/login.jpeg';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    surname: '',
    country: '',
    password: ''
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
      const response = await axios.post('/api/auth/register', formData);
      Swal.fire({
        title: 'Registro exitoso',
        text: response.data.message,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        navigate('/login');
      });
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error.response.data.message,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <div className='flex min-h-screen'>
      <div className='w-1/2 flex flex-col'>
        <nav className='bg-slate-100 text-black p-4 flex-shrink-0 flex items-center'>
          <img src={logo} className='w-12 rounded-full mr-4' alt="Logo" />
          <h1 className='text-3xl font-semibold'>EcoTuristea</h1>
        </nav>

        <div className='flex-1 flex items-center justify-center bg-green- p-8'>
          <div className='max-w-md w-96'>
            <h2 className='text-5xl font-bold text-gray-800 mb-6 text-center'>Regístrate</h2>
            <p className='mb-8 text-slate-400 text-center text-xl'>Bienvenido, para continuar digita tus credenciales</p>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className='block text-gray-700 text-xl mb-2'>Id Usuario</label>
                <input
                  type="text"
                  id="username"
                  className='w-full p-4 border border-gray-300 rounded-lg text-xl'
                  placeholder="Ingresar Usuario"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="name" className='block text-gray-700 text-xl mb-2'>Nombre</label>
                <input
                  type="text"
                  id="name"
                  className='w-full p-4 border border-gray-300 rounded-lg text-xl'
                  placeholder="Ingresar Nombre"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="surname" className='block text-gray-700 text-xl mb-2'>Apellido</label>
                <input
                  type="text"
                  id="surname"
                  className='w-full p-4 border border-gray-300 rounded-lg text-xl'
                  placeholder="Ingresar Apellido"
                  value={formData.surname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="country" className='block text-gray-700 text-xl mb-2'>País</label>
                <input
                  type="text"
                  id="country"
                  className='w-full p-4 border border-gray-300 rounded-lg text-xl'
                  placeholder="Ingresar País"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className='block text-gray-700 text-xl mb-2'>Contraseña</label>
                <input
                  type="password"
                  id="password"
                  className='w-full p-4 border border-gray-300 rounded-lg text-xl'
                  placeholder="*********"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button
                className='px-8 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition text-xl w-full h-14'
                type="submit"
              >
                Regístrate
              </button>
              <div className='flex items-center justify-center'>
                <p className='text-sm flex justify-center mr-1 text-gray-500 cursor-default'>¿Ya tienes cuenta?</p>
                <p className='text-sm text-blue-900 cursor-pointer' onClick={() => navigate("/login")}>Inicia sesión</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='w-1/2'>
        <img
          src={login}
          alt="Imagen descriptiva"
          className='w-full h-full object-cover'
        />
      </div>
    </div>
  );
}
