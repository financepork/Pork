import axios from 'axios'
import { forbiddenInterceptor } from './interceptors/forbidden-interceptor'

const baseURL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

export const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(response => response, forbiddenInterceptor)
