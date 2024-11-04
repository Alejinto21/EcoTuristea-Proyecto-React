import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import login from '../assets/login.jpeg';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    surname: '',
    country: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validaciones
    if (!formData.username || !formData.name || !formData.surname || !formData.country || !formData.password) {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son obligatorios.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }
    if (formData.password.length < 6) {
      Swal.fire({
        title: 'Error',
        text: 'La contraseña debe tener al menos 6 caracteres.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      Swal.fire({
        title: 'Registro exitoso',
        text: response.data.message,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        navigate('/login'); // Redirigir a la página de login
      });
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error.response?.data?.message || 'Ocurrió un error al registrar el usuario.',
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
              <h2 className='text-4xl font-bold text-green-800 mb-6 text-center'>Regístrate</h2>
              <p className='mb-8 text-gray-600 text-center text-sm'>Llena los siguientes campos para crear una cuenta</p>
              <form className='space-y-6' onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username" className='block text-gray-700 text-sm mb-2'>Usuario</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className='w-full p-3 border border-gray-300 rounded-lg text-sm'
                    placeholder="Ingresar usuario"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="name" className='block text-gray-700 text-sm mb-2'>Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className='w-full p-3 border border-gray-300 rounded-lg text-sm'
                    placeholder="Ingresar nombre"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="surname" className='block text-gray-700 text-sm mb-2'>Apellido</label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    className='w-full p-3 border border-gray-300 rounded-lg text-sm'
                    placeholder="Ingresar apellido"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="country" className='block text-gray-700 text-sm mb-2'>País</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className='w-full p-3 border border-gray-300 rounded-lg text-sm'
                    placeholder="Ingresar país"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className='block text-gray-700 text-sm mb-2'>Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className='w-full p-3 border border-gray-300 rounded-lg text-sm'
                    placeholder="Ingresar contraseña"
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  className='px-8 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition text-xl w-full h-14'
                  type="submit"
                >
                  Registrarse
                </button>
                <div className='flex items-center justify-center mt-4'>
                  <p className='text-sm text-gray-600'>¿Ya tienes cuenta?</p>
                  <p className='text-sm text-blue-600 ml-1 cursor-pointer' onClick={() => navigate("/login")}>Inicia sesión aquí</p>
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
    </div>
  );
};

export default Register;
