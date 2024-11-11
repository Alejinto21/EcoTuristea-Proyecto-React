import React, { useState } from 'react';
import '../styles/exploraMasSitios.css';
import { addComment } from '../services/api';

export default function ContactForm() {
    const [themeVisible, setThemeVisible] = useState(false); // State for theme visibility

    const toggleThemeIcons = () => setThemeVisible(!themeVisible); // Function to toggle theme icons

    const [formData, setFormData] = useState({
        nombre: '',
        correo_electronico: '',
        mensaje: ''
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
        const response = await addComment(formData);
        alert(response.message); // Muestra el mensaje de éxito
        // Opcionalmente, reinicia el formulario después de enviarlo
        setFormData({
            nombre: '',
            correo_electronico: '',
            mensaje: ''
        });
        } catch (error) {
        console.error('Error al enviar el comentario:', error);
        alert('Hubo un problema al enviar el comentario.');
        }
    };


    return (
        <section id="contact" className='bg-green-200 p-6 rounded-lg shadow-lg mt-12'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>Contáctanos</h2>
        <p className='text-lg text-gray-700 mb-4'>
            Si tienes alguna pregunta o deseas más información, no dudes en ponerte en contacto con nosotros.
        </p>
        <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name" className='block text-gray-700'>Nombre</label>
            <input 
                type="text" 
                id="nombre" 
                className='w-full p-3 border rounded-lg'
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}                                
            />
            </div>
            <div>
            <label htmlFor="coreo_electronico" className='block text-gray-700'>Correo Electrónico</label>
            <input 
                type="email" 
                id="correo_electronico" 
                className='w-full p-3 border border-gray-300 rounded-lg'
                placeholder="Tu correo electrónico"
                value={formData.correo_electronico}
                onChange={handleChange}
                required
            />
            </div>
            <div>
            <label htmlFor="mensaje" className='block text-gray-700'>Mensaje</label>
            <textarea 
                id="mensaje" 
                rows="4" 
                className='w-full p-3 border rounded-lg'
                placeholder="Tu mensaje"
                value={formData.mensaje}
                onChange={handleChange}
            ></textarea>
            </div>
            
            <button 
            type="submit" 
            className='px-6 py-3 bg-green-400 text-green rounded-lg shadow-lg hover:bg-green-500 transition'> 
            Enviar 
            </button>
        </form>
        </section>
    );
}
