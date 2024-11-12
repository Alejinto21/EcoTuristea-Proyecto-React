import React from 'react';
import { saveRating } from '../services/api';

export default function Rating({ userId, entityId, rating, setRating }) {
    

    const handleRatingClick = async (newRating) => {
        setRating(newRating);
        try {
            await saveRating(userId, entityId, newRating);
            alert('Calificación guardada exitosamente');
        } catch (error) {
            console.error(error);
            alert('Hubo un problema al guardar la calificación');
        }
    };

    console.log('userId:', userId);
    console.log('entityId:', entityId);


    return (
        <div className='flex justify-center mb-6'>
            <h3 className='text-2xl font-bold'>Calificación</h3>
            <div className='flex space-x-1 ml-4'>
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        className={`cursor-pointer text-2xl ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        onClick={() => handleRatingClick(index + 1)}
                    >
                        ★
                    </span>
                ))}
            </div>
        </div>
    );
}