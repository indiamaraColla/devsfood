import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://private-c8d38c-devsfood.apiary-mock.com',
});

export default instance;
