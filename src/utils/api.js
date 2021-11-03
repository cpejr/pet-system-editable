import axios from 'axios';

const api = axios.create({
  // eslint-disable-next-line no-useless-concat
  baseURL: process.env.NODE_ENV === 'production' ? 'https://petsystem.vercelapp.com' : ('http://localhost:3000' + '/api'),
});

export default api;
