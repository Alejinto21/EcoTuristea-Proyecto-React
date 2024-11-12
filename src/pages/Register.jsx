import React, { useState } from 'react';
import Swal from 'sweetalert2';
import login from '../assets/login.jpeg';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';

const Register = () => {
  const [formData, setFormData] = useState({
    id_usuario: '',
    first_name: '',
    last_name: '',
    country: '',
    email: '',
    password: '',
    security_question1: '',
    security_answer1: '',
    security_question2: '',
    security_answer2: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de campos
    if (!formData.id_usuario || !formData.first_name || !formData.last_name || !formData.country || !formData.email || !formData.password || !formData.question1 || !formData.answer1 || !formData.question2 || !formData.answer2) {
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
      <div className='w-full lg:w-1/2 flex flex-col '>
        <nav className="text-black p-1 w-full fixed top-0 left-0 flex items-center rounded-xl ">
          <img src={logo} className="w-10 h-10 rounded-full mr-2" alt="Logo" />
          <h1 className="text-xl font-semibold ">EcoTuristea</h1>
        </nav>

        <div className='w-full h-[84vh] flex-1 flex items-center justify-center p-1 '>
          <div className='max-w-md w-full px-4 '>
            <h2 className='text-lg font-bold text-gray-800 mb-2 text-center'>Regístrate</h2>
            <p className='mb-2 text-slate-400 text-center text-xs'>Bienvenido, por favor llena tus datos.</p>
            <form className='grid grid-cols-1 lg:grid-cols-2 gap-2' onSubmit={handleSubmit}>
              <div>
                <label htmlFor="id_usuario" className='block text-gray-700 text-xs mb-1'>Id Usuario</label>
                <input
                  type="text"
                  id="id_usuario"
                  name="id_usuario"
                  className='w-full p-1 border border-gray-300 rounded-lg text-xs'
                  placeholder="Ej. user123"
                  required
                  value={formData.id_usuario}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="first_name" className='block text-gray-700 text-xs mb-1'>Nombre</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  className='w-full p-1 border border-gray-300 rounded-lg text-xs'
                  placeholder="Ej. Juan"
                  required
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="last_name" className='block text-gray-700 text-xs mb-1'>Apellido</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  className='w-full p-1 border border-gray-300 rounded-lg text-xs'
                  placeholder="Ej. Pérez"
                  required
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="country" className='block text-gray-700 text-xs mb-1'>País</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className='w-full p-1 border border-gray-300 rounded-lg text-xs'
                  placeholder="Ej. México"
                  required
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className='block text-gray-700 text-xs mb-1'>Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className='w-full p-1 border border-gray-300 rounded-lg text-xs'
                  placeholder="Ej. ejemplo@correo.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div >
                <label htmlFor="password" className='block text-gray-700 text-xs mb-1'>Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password" 
                  className='w-full p-1 border border-gray-300 rounded-lg text-xs'
                  placeholder="*********"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-1 lg:col-span-2">
                <label htmlFor="question1" className="block text-gray-700 text-xs mb-1">Pregunta de seguridad 1</label>
                <select
                  id="question1"
                  name="question1"
                  className="w-full p-1 border border-gray-300 rounded-lg text-xs"
                  required
                  value={formData.question1}
                  onChange={handleChange}
                >
                  <option value="">Selecciona una pregunta</option>
                  <option value="¿Cuál es el nombre de tu primera mascota?">¿Cuál es el nombre de tu primera mascota?</option>
                  <option value="¿En qué ciudad naciste?">¿En qué ciudad naciste?</option>
                  <option value="¿Cuál es tu comida favorita?">¿Cuál es tu comida favorita?</option>
                </select>
              </div>
              <div className="col-span-1 lg:col-span-2">
                <label htmlFor="answer1" className="block text-gray-700 text-xs mb-1">Respuesta a la Pregunta 1</label>
                <input
                  type="text"
                  id="answer1"
                  name="answer1"
                  className="w-full p-1 border border-gray-300 rounded-lg text-xs"
                  placeholder="Respuesta"
                  required
                  value={formData.answer1}
                  onChange={handleChange}
                />
              </div>

              {/* Pregunta de seguridad 2 */}
              <div className="col-span-1 lg:col-span-2">
                <label htmlFor="question2" className="block text-gray-700 text-xs mb-1">Pregunta de seguridad 2</label>
                <select
                  id="question2"
                  name="question2"
                  className="w-full p-1 border border-gray-300 rounded-lg text-xs"
                  required
                  value={formData.question2}
                  onChange={handleChange}
                >
                  <option value="">Selecciona una pregunta</option>
                  <option value="¿Cuál es el nombre de tu primera mascota?">¿Cuál es el nombre de tu primera mascota?</option>
                  <option value="¿En qué ciudad naciste?">¿En qué ciudad naciste?</option>
                  <option value="¿Cuál es tu comida favorita?">¿Cuál es tu comida favorita?</option>
                </select>
              </div>
              <div className="col-span-1 lg:col-span-2">
                <label htmlFor="answer2" className="block text-gray-700 text-xs mb-1">Respuesta a la Pregunta 2</label>
                <input
                  type="text"
                  id="answer2"
                  name="answer2"
                  className="w-full p-1 border border-gray-300 rounded-lg text-xs"
                  placeholder="Respuesta"
                  required
                  value={formData.answer2}
                  onChange={handleChange}
                />
              </div>

              <button className="col-span-1 lg:col-span-2 px-4 py-1 bg-[#2b9e4e] text-white rounded-lg shadow-md hover:bg-[#66cc75] hover:text-[#212121] hover:font-bold hover:shadow-md hover:shadow-[#66cc75] transition-all duration-200 ease-in-out text-xs w-full h-8"
                  type="submit"
                >
                  Regístrate
              </button>

              <div className='col-span-1 lg:col-span-2 flex items-center justify-center mt-1'>
                <p className='text-xs flex justify-center mr-1 text-gray-500 cursor-default'>¿Ya tienes cuenta?</p>
                <p className='text-xs text-blue-900 cursor-pointer' onClick={() => navigate("/login")}>Inicia sesión</p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Imagen reducida */}
      <div className='hidden lg:flex items-center justify-center w-1/2 h-screen'>
        <img
          src={login}
          alt="Imagen descriptiva"
          className='w-full h-[84vh] object-cover object-center rounded-3xl shadow-lg'  
        />
      </div> 
    </div>
  );
};

export default Register;
