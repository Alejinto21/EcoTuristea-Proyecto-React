import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Rating from '../components/Rating'; // Ruta relativa al componente

// Componente de prueba para simular el estado
const RatingWrapper = () => {
  const [rating, setRating] = useState(0);
  return <Rating rating={rating} setRating={setRating} />;
};

describe('Rating Component', () => {
  it('should render 5 stars', () => {
    render(<RatingWrapper />);
    
    // Verifica que 5 estrellas estén renderizadas
    const stars = screen.getAllByText('★');
    expect(stars).toHaveLength(5);
  });

  it('should display the correct color for each star based on rating', () => {
    render(<RatingWrapper />);

    // Inicialmente, las estrellas deben ser grises (rating = 0)
    const stars = screen.getAllByText('★');
    stars.forEach((star, index) => {
      expect(star).toHaveClass('text-gray-300');
    });

    // Cambiar el rating a 3
    fireEvent.click(stars[2]);
    
    // Verifica que las 3 primeras estrellas estén amarillas y las otras grises
    stars.forEach((star, index) => {
      if (index < 3) {
        expect(star).toHaveClass('text-yellow-500');
      } else {
        expect(star).toHaveClass('text-gray-300');
      }
    });
  });

  it('should call setRating with the correct value when a star is clicked', () => {
    const setRatingMock = jest.fn();
    render(<Rating rating={0} setRating={setRatingMock} />);

    const stars = screen.getAllByText('★');

    // Simula un clic en la tercera estrella (índice 2)
    fireEvent.click(stars[2]);

    // Verifica que setRating haya sido llamado con el valor correcto (3)
    expect(setRatingMock).toHaveBeenCalledWith(3);
  });

  it('should update the rating when a star is clicked', () => {
    render(<RatingWrapper />);

    const stars = screen.getAllByText('★');
    
    // Simula un clic en la cuarta estrella (índice 3)
    fireEvent.click(stars[3]);

    // Verifica que la calificación se haya actualizado a 4
    expect(screen.getByText('★').className).toContain('text-yellow-500');
  });
});
