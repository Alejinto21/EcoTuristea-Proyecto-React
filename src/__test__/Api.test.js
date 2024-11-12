import axios from 'axios';
import { registerUser, loginUser } from '../services/api'; // Asegúrate de que la ruta sea correcta

// Mock de axios
jest.mock('axios');

describe('UserService', () => {
  // Test de registerUser
  describe('registerUser', () => {
    it('debe registrar al usuario correctamente y retornar los datos', async () => {
      const mockUserData = { username: 'testuser', password: 'testpassword' };
      const mockResponse = { data: { id: 1, username: 'testuser' } };

      // Configuramos axios.post para devolver un valor simulado
      axios.post.mockResolvedValue(mockResponse);

      const result = await registerUser(mockUserData);

      // Verificamos que axios.post haya sido llamado con los datos correctos
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/users/register', mockUserData);

      // Verificamos que el resultado sea el esperado
      expect(result).toEqual(mockResponse.data);
    });

    it('debe lanzar un error cuando la solicitud falle', async () => {
      const mockUserData = { username: 'testuser', password: 'testpassword' };
      const mockError = new Error('Error registering user');

      // Configuramos axios.post para devolver un error
      axios.post.mockRejectedValue(mockError);

      // Verificamos que la función lance un error cuando la solicitud falle
      await expect(registerUser(mockUserData)).rejects.toThrowError(mockError);
    });
  });

  // Test de loginUser
  describe('loginUser', () => {
    it('debe iniciar sesión correctamente y retornar los datos del usuario', async () => {
      const mockCredentials = { username: 'testuser', password: 'testpassword' };
      const mockResponse = { data: { id: 1, username: 'testuser' } };

      // Configuramos axios.post para devolver un valor simulado
      axios.post.mockResolvedValue(mockResponse);

      const result = await loginUser(mockCredentials);

      // Verificamos que axios.post haya sido llamado con los datos correctos
      expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/api/users/login', mockCredentials);

      // Verificamos que el resultado sea el esperado
      expect(result).toEqual(mockResponse.data);
    });

    it('debe lanzar un error cuando la solicitud falle', async () => {
      const mockCredentials = { username: 'testuser', password: 'testpassword' };
      const mockError = new Error('Error logging in user');

      // Configuramos axios.post para devolver un error
      axios.post.mockRejectedValue(mockError);

      // Verificamos que la función lance un error cuando la solicitud falle
      await expect(loginUser(mockCredentials)).rejects.toThrowError(mockError);
    });
  });
});
