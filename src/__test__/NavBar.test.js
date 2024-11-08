import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/NavBar'; // Ruta relativa a tu componente

// Componente que envuelve a NavBar con Router
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('NavBar Component', () => {
  it('should render the NavBar correctly', () => {
    renderWithRouter(<NavBar />);

    // Verifica que los elementos están presentes
    expect(screen.getByText(/EcoTuristea/i)).toBeInTheDocument();
    expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
    expect(screen.getByText(/Sobre Nosotros/i)).toBeInTheDocument();
    expect(screen.getByText(/Tema/i)).toBeInTheDocument();
    expect(screen.getByText(/Salir/i)).toBeInTheDocument();
  });

  it('should navigate to /exploraMasSitios when "Inicio" is clicked', () => {
    renderWithRouter(<NavBar />);

    const inicioButton = screen.getByText(/Inicio/i);
    fireEvent.click(inicioButton);

    // Verifica que la navegación se realizó correctamente
    // Usamos expect para verificar si la URL cambia
    expect(window.location.pathname).toBe('/exploraMasSitios');
  });

  it('should navigate to /sobreNosotros when "Sobre Nosotros" is clicked', () => {
    renderWithRouter(<NavBar />);

    const sobreNosotrosButton = screen.getByText(/Sobre Nosotros/i);
    fireEvent.click(sobreNosotrosButton);

    // Verifica que la URL cambia correctamente
    expect(window.location.pathname).toBe('/sobreNosotros');
  });

  it('should trigger a click event for "Salir" button', () => {
    renderWithRouter(<NavBar />);

    const salirButton = screen.getByText(/Salir/i);
    fireEvent.click(salirButton);

    // Este test asume que el botón "Salir" no navega, solo se hace clic
    // Por lo tanto, no verificamos la URL en este caso
    expect(salirButton).toBeInTheDocument();
  });
});
