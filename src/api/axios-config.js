import axios from 'axios';
var apiURL = 'http://54.147.244.100/api/';

const Axios = axios.create({
  baseURL: apiURL,
  timeout: 15000,
  headers: {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

Axios.interceptors.response.use(
  response => {
    return response.data.data;
  },
  error => {
    return Promise.reject(error.response.data);
  },
);

export {Axios, apiURL};
