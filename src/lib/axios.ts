import { env } from '@/config/environment';
import Axios, { AxiosInstance } from 'axios';

export const api: AxiosInstance = Axios.create({
  baseURL: env.BASE_URL_API,
});
