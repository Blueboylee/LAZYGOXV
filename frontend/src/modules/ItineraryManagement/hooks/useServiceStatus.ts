import { useCallback, useEffect, useState } from 'react'
import { fetchServiceHealth, fetchHelloMessage, type HealthStatus } from '../../../services/api/itineraryService'

export const useServiceStatus = () => {
  const [health, setHealth] = useState<HealthStatus | null>(null)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const loadHealth = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchServiceHealth()
      setHealth(data)
    } catch (err) {
      console.error(err)
      setError('无法连接到后端服务，请确保后端已启动')
    } finally {
      setLoading(false)
    }
  }, [])

  const loadGreeting = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchHelloMessage()
      setMessage(data)
    } catch (err) {
      console.error(err)
      setError('获取问候消息失败')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadHealth()
  }, [loadHealth])

  return {
    health,
    message,
    loading,
    error,
    loadHealth,
    loadGreeting,
  }
}


