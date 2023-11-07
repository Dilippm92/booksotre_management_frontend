import axios from 'axios';

const backendApiUrl = 'http://localhost:5000/auth';

export const registerUser = async (userData) => {
    try {
      const response = await axios.post(`${backendApiUrl}/register`, userData);
    
      return response; 
    } catch (error) {
      throw error;
    }
  };
  export const loginUser = async (userData) => {
    try {
      const response = await axios.post(`${backendApiUrl}/login`, userData);
    
      return response; 
    } catch (error) {
      throw error;
    }
  };