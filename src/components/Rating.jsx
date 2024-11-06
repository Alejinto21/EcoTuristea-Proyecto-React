import React from 'react';

export default function Rating({ rating, setRating }) {
    return (
        <div className='flex justify-center mb-6'>
        <h3 className='text-2xl font-bold'>Calificación</h3>
        <div className='flex space-x-1 ml-4'>
            {[...Array(5)].map((_, index) => (
            <span 
                key={index} 
                className={`cursor-pointer text-2xl ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                onClick={() => setRating(index + 1)}
            >
                ★
            </span>
            ))}
        </div>
        </div>
    );
}