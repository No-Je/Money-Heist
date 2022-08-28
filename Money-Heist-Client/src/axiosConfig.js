import axios from 'axios';
const BASE_URL  = process.env.BASE_URL;

const client = axios.create({
  baseURL: BASE_URL,
});

export default client;
