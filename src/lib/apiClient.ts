import axios, { AxiosRequestConfig } from 'axios';
import { getCookie } from 'cookies-next';

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const defaultOptions = {
  baseURL,
};

const apiClient = () => {
  const instance = axios.create(defaultOptions);

  const jwt = getCookie('access_token');

  instance.interceptors.request.use(async (request: AxiosRequestConfig) => {
    if (jwt && request?.headers) {
      request.headers.Authorization = `Bearer ${jwt}`;
    }
    return request;
  });

  return instance;
};

export default apiClient();
