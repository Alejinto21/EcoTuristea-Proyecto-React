import React, { useState } from 'react';
import login from '../assets/login.jpeg';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'; // Importar SweetAlert2
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importar iconos

export default function Login() {
  const [id_usuario, setId_usuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña
  const navigate = useNavigate();

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Realiza la solicitud de inicio de sesión
    axios.post('http://localhost:3000/api/users/login', { id_usuario, contraseña }) // Asegurarse de enviar la contraseña en texto plano
      .then((res) => {
        console.log('Inicio de sesión exitoso:', res);

        // Mostrar SweetAlert de éxito
        Swal.fire({
          title: 'Inicio de sesión exitoso',
          text: 'Has iniciado sesión correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          navigate("/paginaPrincipal"); // Navega a la página principal
        });
      })
      .catch((err) => {
        console.error('Error en el inicio de sesión:', err);

        // Mostrar SweetAlert de error
        Swal.fire({
          title: 'Error',
          text: 'Error en el inicio de sesión. Intenta de nuevo.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      });
  };

  // Función para alternar el modal
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Función para alternar mostrar/ocultar la contraseña
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='flex min-h-screen'>

      <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
      <nav className="bg-slate-100 text-black p-4 w-full fixed top-0 left-0 flex items-center">
        <img src={logo} className="w-10 rounded-full mr-4" alt="Logo" />
        <h1 className="text-2xl font-semibold">EcoTuristea</h1>
      </nav>

        <div className='flex-1 flex items-center justify-center bg-green- p-8 w-full'>
          <div className='max-w-md w-full'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>Iniciar Sesión</h2> 
            <p className='mb-5 text-slate-400 text-center text-lg'>Bienvenido, para continuar digita tus credenciales</p> 
            <form className='space-y-3' onSubmit={handleSubmit}> 
              <div>
                <label htmlFor="id usuario" className='block text-gray-700 text-lg mb-2'>ID Usuario</label>
                <input 
                  type="text" 
                  id="username" 
                  className='w-full p-2 border border-gray-300 rounded-lg text-lg' 
                  placeholder="Ingresar ID usuario"
                  required
                  value={id_usuario}
                  onChange={(e) => setId_usuario(e.target.value)} // Actualiza el estado cuando cambia el valor de entrada
                />
              </div>
              <div>
                <label htmlFor="password" className='block text-gray-700 text-lg mb-2'>Contraseña</label> 
                <div className='relative'>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    className='w-full p-2 border border-gray-300 rounded-lg text-lg' 
                    placeholder="Ingresar contraseña"
                    required
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)} // Actualiza el estado cuando cambia el valor de entrada
                  />
                  <div className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer' onClick={toggleShowPassword}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </div>
              <p className='text-xs text-right cursor-pointer' onClick={handleModalToggle}>¿Olvidaste la contraseña?</p>
              <button className="col-span-2 px-6 py-2 bg-[#2b9e4e] text-white rounded-lg shadow-md hover:bg-[#66cc75] hover:text-[#212121] hover:font-bold hover:shadow-md hover:shadow-[#66cc75] transition-all duration-300 ease-in-out text-sm w-full h-10"
                  type="submit"               
              >
                Iniciar Sesión
              </button>
              <div className='flex items-center justify-center'>
                <p className='text-xs flex justify-center mr-1 text-gray-500 cursor-default'>¿No tienes cuenta?</p>
                <p className='text-xs text-blue-900 cursor-pointer' onClick={() => navigate("/register")}>Regístrate</p> 
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center h-screen'>
        <img
          src={login}
          alt="Imagen descriptiva"
          className='w-full h-[74vh] object-cover object-center  rounded-l-3xl shadow-lg'  
        />
      </div>

      {/* Modal para recuperar contraseña */}
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg max-w-sm w-full'>
            <h2 className='text-lg font-bold mb-4'>Recuperar Contraseña</h2> 
            <p className='mb-4'>Ingresa tu correo electrónico para recibir instrucciones sobre cómo recuperar tu contraseña.</p>
            <input 
              type="email" 
              className='w-full p-2 border border-gray-300 rounded-lg mb-4'
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado cuando cambia el valor de entrada
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
