import React from 'react';

export default function ContactForm() {
    return (
        <section id="contact" className='bg-green-200 p-6 rounded-lg shadow-lg mt-12'>
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>Contáctanos</h2>
        <p className='text-lg text-gray-700 mb-4'>
            Si tienes alguna pregunta o deseas más información, no dudes en ponerte en contacto con nosotros.
        </p>
        <form className='space-y-4'>
            <div>
            <label htmlFor="name" className='block text-gray-700'>Nombre</label>
            <input 
                type="text" 
                id="name" 
                className='w-full p-3 border rounded-lg'
                placeholder="Tu nombre"
            />
            </div>
            <div>
            <label htmlFor="email" className='block text-gray-700'>Correo Electrónico</label>
            <input 
                type="email" 
                id="email" 
                className='w-full p-3 border rounded-lg'
                placeholder="Tu correo electrónico"
            />
            </div>
            <div>
            <label htmlFor="message" className='block text-gray-700'>Mensaje</label>
            <textarea 
                id="message" 
                rows="4" 
                className='w-full p-3 border rounded-lg'
                placeholder="Tu mensaje"
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
