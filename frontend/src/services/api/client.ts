import axios from 'axios'

export const apiClient = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export interface ApiResponse<T> {
  code: number
  message: string
  data: T
  timestamp: number
}


