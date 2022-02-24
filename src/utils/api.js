import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://petmkt.vercel.app/api' : 'http://localhost:3000/api',
});

export default api;
