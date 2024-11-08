// src/__test__/ContactForm.test.js
import React from 'react';  // Asegúrate de importar React
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../components/ContactForm';

describe('ContactForm', () => {
  test('debería renderizar los elementos del formulario', () => {
    render(<ContactForm />);
    // Verificar si los elementos de texto se renderizan
    expect(screen.getByText(/Contáctanos/i)).toBeInTheDocument();
  });

  test('debería permitir ingresar texto en los campos', () => {
    render(<ContactForm />);
    const nameInput = screen.getByLabelText(/Nombre/i);
    const emailInput = screen.getByLabelText(/Correo Electrónico/i);
    fireEvent.change(nameInput, { target: { value: 'Juan' } });
    fireEvent.change(emailInput, { target: { value: 'juan@example.com' } });
    expect(nameInput.value).toBe('Juan');
    expect(emailInput.value).toBe('juan@example.com');
  });

  test('el botón de enviar debe estar presente y ser clickeable', () => {
    render(<ContactForm />);
    const submitButton = screen.getByRole('button', { name: /Enviar/i });
    expect(submitButton).toBeInTheDocument();
    fireEvent.click(submitButton);
    // Asegúrate de que el botón sea clickeable
    expect(submitButton).not.toBeDisabled();
  });
});
