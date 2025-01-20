import { env } from '@/config/environment';
import Axios from 'axios';

export const api = Axios.create({
  baseURL: env.BASE_URL_API,
});
