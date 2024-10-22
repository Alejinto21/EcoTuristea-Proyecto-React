import axios from 'axios';

const API_URL = 'http://localhost:3000/api/users/register'; // Cambia esto si tu backend usa otro puerto


export const registerUser = async (userData) => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/register', userData);
      return response.data;
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
