import axios from 'axios'

// 创建 axios 实例
const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    // 返回响应数据中的 data 字段
    return response.data.data
  },
  (error) => {
    console.error('API Error:', error)
    return Promise.reject(error)
  }
)

/**
 * 健康检查 API
 */
export const fetchHealth = async () => {
  return await api.get('/health')
}

/**
 * 获取问候消息 API
 */
export const fetchHello = async () => {
  return await api.get('/hello')
}

export default api

