import axios from 'axios';

export const setSession = (token) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  localStorage.setItem('token', token);
};

export const deleteSession = () => {
  axios.defaults.headers.common['Authorization'] = '';
  localStorage.removeItem('token');
};

export const login = (payload) => {
  return axios.post('/auth/login', payload);
};
