import { useState, useEffect } from 'react'
import './App.css'
import { fetchHealth, fetchHello } from './services/api'

interface HealthData {
  status: string;
  service: string;
  timestamp: string;
}

function App() {
  const [health, setHealth] = useState<HealthData | null>(null)
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')

  // 组件加载时检查后端健康状态
  useEffect(() => {
    checkHealth()
  }, [])

  const checkHealth = async () => {
    setLoading(true)
    setError('')
    try {
      const data = await fetchHealth()
      setHealth(data)
    } catch (err) {
      setError('无法连接到后端服务，请确保后端已启动')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const getHelloMessage = async () => {
    setLoading(true)
    setError('')
    try {
      const data = await fetchHello()
      setMessage(data)
    } catch (err) {
      setError('获取消息失败')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1>🚀 LAZYGOXV</h1>
        <p className="subtitle">Spring Boot + React Monorepo 项目</p>

        <div className="card">
          <h2>后端健康状态</h2>
          {loading && <p>加载中...</p>}
          {error && <p className="error">{error}</p>}
          {health && (
            <div className="health-info">
              <p>✅ 状态: <strong>{health.status}</strong></p>
              <p>📦 服务: <strong>{health.service}</strong></p>
              <p>🕐 时间: <strong>{new Date(health.timestamp).toLocaleString('zh-CN')}</strong></p>
            </div>
          )}
          <button onClick={checkHealth} disabled={loading}>
            刷新健康检查
          </button>
        </div>

        <div className="card">
          <h2>API 测试</h2>
          <button onClick={getHelloMessage} disabled={loading}>
            获取问候消息
          </button>
          {message && (
            <div className="message">
              <p>{message}</p>
            </div>
          )}
        </div>

        <div className="info">
          <h3>📚 快速开始</h3>
          <ul>
            <li>后端地址: <code>http://localhost:8080</code></li>
            <li>前端地址: <code>http://localhost:5173</code></li>
            <li>API 文档: <code>/api/health</code> | <code>/api/hello</code></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App

