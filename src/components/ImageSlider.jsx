import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function ImageSlider({ images, currentImage, setCurrentImage }) {
    const showImage = (index) => setCurrentImage(images[index]);

    return (
        <div className="relative p-6">
            <img
                src={currentImage}
                alt="currentImage"
                className='w-full h-96 object-cover rounded-lg shadow-2xl transition-transform transform hover:scale-105'
            />
            <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4'>
                <button onClick={() => showImage(0)} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gradient-to-r from-green-700 to-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition flex items-center justify-center"
                style={{ boxShadow: '0 0 10px rgba(72, 209, 204, 0.6), 0 0 20px rgba(72, 209, 204, 0.6)' }}>
                    <FontAwesomeIcon icon={faArrowLeft} className='text-2xl' />
                </button>
                <button onClick={() => showImage(1)} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gradient-to-r from-green-700 to-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transition flex items-center justify-center"
                style={{ boxShadow: '0 0 10px rgba(72, 209, 204, 0.6), 0 0 20px rgba(72, 209, 204, 0.6)' }}>
                    <FontAwesomeIcon icon={faArrowRight}  className='text-2xl' />
                </button>
            </div>
        </div>
    );
}