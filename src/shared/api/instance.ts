import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://bothubq.com/api/v2',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_AUTH_API_TOKEN}`,
  },
});