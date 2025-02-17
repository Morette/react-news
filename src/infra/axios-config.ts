import axios, { AxiosInstance } from 'axios'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL as string | undefined

export const api: AxiosInstance = axios.create({
  baseURL: apiBaseUrl ?? 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})
