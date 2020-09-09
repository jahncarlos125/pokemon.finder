import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vortigo.blob.core.windows.net/files/pokemon/data',
});

export default api;
