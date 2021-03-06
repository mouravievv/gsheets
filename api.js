import axios from 'axios';
import { baseURL } from './constants';

const api = axios.create({
  baseURL,
  withCredentials: true,
  /* other custom settings */
});

export default api;
