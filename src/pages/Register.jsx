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
    <div className='flex min-h-screen overflow-hidden'>
      <div className='w-1/2 flex flex-col'>
      <nav className="bg-slate-100 text-black p-2 w-full fixed top-0 left-0 flex items-center">
        <img src={logo} className="w-8 h-8 rounded-full mr-2" alt="Logo" />
        <h1 className="text-xl font-semibold">EcoTuristea</h1>
      </nav>

        <div className='flex-1 flex items-center justify-center bg-green- p-2'>
          <div className='max-w-lg w-full px-8'> {/* Aumentamos el ancho máximo y añadimos padding horizontal */}
            <h2 className='text-2xl font-bold text-gray-800 mb-3 text-center'>Regístrate</h2>
            <p className='mb-3 text-slate-400 text-center text-sm'>Bienvenido, para continuar digita tus credenciales</p>
            <form className='grid grid-cols-2 gap-4' onSubmit={handleSubmit}>
              <div className='col-span-2'>
                <label htmlFor="id_usuario" className='block text-gray-700 text-lg mb-1'>Id Usuario</label>
                <input
                  type="text"
                  name="id_usuario"
                  className='w-full p-1 border border-gray-300 rounded-lg text-sm'
                  placeholder="Ingresar ID Usuario"
                  required
                  value={formData.id_usuario}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="first_name" className='block text-gray-700 text-lg mb-1'>Nombre</label>
                <input
                  type="text"
                  name="first_name"
                  className='w-full p-1 border border-gray-300 rounded-lg text-sm'
                  placeholder="Ingresar Nombre"
                  required
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="last_name" className='block text-gray-700 text-lg mb-1'>Apellido</label>
                <input
                  type="text"
                  name="last_name"
                  className='w-full p-1 border border-gray-300 rounded-lg text-sm'
                  placeholder="Ingresar Apellido"
                  required
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
              <div className='col-span-2'>
                <label htmlFor="country" className='block text-gray-700 text-lg mb-1'>País</label>
                <input
                  type="text"
                  name="country"
                  className='w-full p-1 border border-gray-300 rounded-lg text-sm'
                  placeholder="Ingresar País"
                  required
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div className='col-span-2'>
                <label htmlFor="contraseña" className='block text-gray-700 text-lg mb-1'>Contraseña</label>
                <input
                  type="password"
                  name="contraseña"
                  className='w-full p-1 border border-gray-300 rounded-lg text-sm'
                  placeholder="*********"
                  required
                  value={formData.contraseña}
                  onChange={handleChange}
                />
              </div>
              <button className="col-span-2 px-6 py-2 bg-[#2b9e4e] text-white rounded-lg shadow-md hover:bg-[#66cc75] hover:text-[#212121] hover:font-bold hover:shadow-md hover:shadow-[#66cc75] transition-all duration-300 ease-in-out text-sm w-full h-10"
                  type="submit"
                >
                  Regístrate
                </button>
              <div className='col-span-2 flex items-center justify-center mt-2'>
                <p className='text-xs flex justify-center mr-1 text-gray-500 cursor-default'>¿Ya tienes cuenta?</p>
                <p className='text-xs text-blue-900 cursor-pointer' onClick={() => navigate("/login")}>Inicia sesión</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center h-screen'>
        <img
          src={login}
          alt="Imagen descriptiva"
          className='w-full h-[80vh] object-cover object-center  rounded-l-3xl shadow-lg'  
        />
      </div> 
    </div>
  );
}