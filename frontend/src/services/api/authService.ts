import { apiClient, type ApiResponse } from './client'

type LoginPayload = {
  email: string
  password: string
}

export const login = async (payload: LoginPayload) => {
  // 预留接口调用，当前仅返回模拟响应
  const mockResponse: ApiResponse<{ token: string }> = {
    code: 200,
    message: 'success',
    data: { token: 'mock-token' },
    timestamp: Date.now(),
  }

  if (!payload.email || !payload.password) {
    throw new Error('邮箱或密码不能为空')
  }

  return mockResponse.data
}

export const logout = async () => {
  return apiClient.post('/auth/logout')
}


