import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ImageSlider from '../components/ImageSlider';

describe('ImageSlider', () => {
  const images = ['image1.jpg', 'image2.jpg'];
  let currentImage = 'image1.jpg';  // Inicializamos currentImage
  const setCurrentImage = jest.fn();

  beforeEach(() => {
    // Restauramos el mock entre pruebas
    setCurrentImage.mockClear();
  });

  test('should render correctly', () => {
    render(<ImageSlider images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} />);
    
    // Verificamos que la imagen actual se renderice correctamente
    expect(screen.getByAltText('currentImage')).toHaveAttribute('src', currentImage);
  });

  test('should call setCurrentImage with the correct image when the left arrow is clicked', () => {
    render(<ImageSlider images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} />);
    
    // Simulamos un clic en el botón de la izquierda
    const leftButton = screen.getByLabelText('arrow left');  // Usamos getByLabelText para encontrar el botón
    fireEvent.click(leftButton);
    
    // Verificamos que setCurrentImage fue llamado con el índice correcto
    expect(setCurrentImage).toHaveBeenCalledWith('image2.jpg');
  });

  test('should call setCurrentImage with the correct image when the right arrow is clicked', () => {
    render(<ImageSlider images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} />);
    
    // Simulamos un clic en el botón de la derecha
    const rightButton = screen.getByLabelText('arrow right');  // Usamos getByLabelText para encontrar el botón
    fireEvent.click(rightButton);
    
    // Verificamos que setCurrentImage fue llamado con el índice correcto
    expect(setCurrentImage).toHaveBeenCalledWith('image2.jpg');
  });

  test('should not change the image when clicking the same button twice (left arrow)', () => {
    currentImage = 'image2.jpg';  // Actualizamos currentImage para probar la lógica de "no cambio"
    render(<ImageSlider images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} />);
    
    // Simulamos un clic en el botón de la izquierda
    const leftButton = screen.getByLabelText('arrow left');  // Usamos getByLabelText para encontrar el botón
    fireEvent.click(leftButton);
    
    // Verificamos que la imagen no cambió
    expect(setCurrentImage).toHaveBeenCalledWith('image1.jpg');
  });

  test('should apply the correct image class to the image element', () => {
    render(<ImageSlider images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} />);
    
    const imgElement = screen.getByAltText('currentImage');
    expect(imgElement).toHaveClass('w-full h-96 object-cover rounded-lg shadow-2xl transition-transform transform hover:scale-105');
  });
});
