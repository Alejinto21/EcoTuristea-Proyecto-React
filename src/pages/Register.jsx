import React, { useState } from 'react';
import Swal from 'sweetalert2';
import login from '../assets/login.jpeg';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api'; // Importa la función desde api.js

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id_usuario: '',
    first_name: '',
    last_name: '',
    country: '',
    contraseña: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      Swal.fire({
        title: 'Registro exitoso',
        text: response.message,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        navigate('/login');
      });
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error.response ? error.response.data.message : 'Algo salió mal',
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
                <label htmlFor="id_usuario" className='block text-gray-700 text-xl mb-2'>Id Usuario</label>
                <input
                  type="text"
                  name="id_usuario"
                  className='w-full p-4 border border-gray-300 rounded-lg text-xl'
                  placeholder="Ingresar Usuario"
                  value={formData.id_usuario}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="name" className='block text-gray-700 text-xl mb-2'>Nombre</label>
                <input
                  type="text"
                  name="first_name"
                  className='w-full p-4 border border-gray-300 rounded-lg text-xl'
                  placeholder="Ingresar Nombre"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="surname" className='block text-gray-700 text-xl mb-2'>Apellido</label>
                <input
                  type="text"
                  name="last_name"
                  className='w-full p-4 border border-gray-300 rounded-lg text-xl'
                  placeholder="Ingresar Apellido"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="country" className='block text-gray-700 text-xl mb-2'>País</label>
                <input
                  type="text"
                  name="country"
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
                  name="contraseña"
                  className='w-full p-4 border border-gray-300 rounded-lg text-xl'
                  placeholder="*********"
                  value={formData.contraseña}
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
