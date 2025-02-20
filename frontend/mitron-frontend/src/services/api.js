import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8080/api';
const API_BASE_URL = 'http://localhost:3001';

export const login = (credentials) => {
  return axios.post(`${API_BASE_URL}/auth/login`, credentials);
};

export const joinQueue = (userId) => {
  return axios.post(`${API_BASE_URL}/queue/join`, { userId });
};