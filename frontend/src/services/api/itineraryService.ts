import { apiClient, type ApiResponse } from './client'

export interface HealthStatus {
  status: string
  service: string
  timestamp: string
}

export const fetchServiceHealth = async (): Promise<HealthStatus> => {
  const response = await apiClient.get<ApiResponse<HealthStatus>>('/health')
  return response.data.data
}

export const fetchHelloMessage = async (): Promise<string> => {
  const response = await apiClient.get<ApiResponse<string>>('/hello')
  return response.data.data
}


