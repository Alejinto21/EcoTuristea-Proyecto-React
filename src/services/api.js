import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Cambia esto si tu backend usa otro puerto////////////rutaaa

export const registerUser = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/register', userData);//cambiar ruta si hay problema con las rutas      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/users/login`, credentials);
        return response.data;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
};

// Función para agregar un comentario
export const addComment = async (commentData) => {
  try {
      const response = await axios.post(`${API_URL}/comentarios/addComment`, commentData);
      return response.data;
    } catch (error) {
      console.error("Error al agregar comentario:", error.response?.data || error.message);
      throw error;
  }
};

// Verificación de preguntas de seguridad
export const verifySecurityQuestions = async (data) => {
  const response = await axios.post('/api/users/verify-security-questions', data);
  return response.data;
};

// Actualización de la nueva contraseña
export const resetPassword = async (data) => {
  const response = await axios.post('/api/users/reset-password', data);
  return response.data;
};
