import axios from 'axios';
import { removeUserCookie } from './cookie';
import { getUserToken } from './cookie';

let apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

apiInstance.interceptors.request.use(
  async config => {
    const adminToken = await getUserToken();
    if (adminToken) {
      config.headers.Authorization = `Bearer ${adminToken}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

apiInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async error => {
    const { response } = error;
    if (response.status === 401) {
      await removeUserCookie();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
export const apiConfig = apiInstance;
