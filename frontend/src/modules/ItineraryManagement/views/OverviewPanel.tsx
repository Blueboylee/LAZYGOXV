import Card from '../../../shared/components/Card'
import { formatDateTime } from '../../../shared/utils/formatDateTime'
import { useServiceStatus } from '../hooks/useServiceStatus'

const OverviewPanel = () => {
  const { health, message, loading, error, loadHealth, loadGreeting } = useServiceStatus()

  return (
    <div className="dashboard-shell">
      <div className="dashboard-card">
        <h1>🚀 LAZYGOXV</h1>
        <p className="subtitle">Spring Boot + React Monorepo 项目</p>

        <Card>
          <h2>后端健康状态</h2>
          {loading && <p>加载中...</p>}
          {error && <p className="error">{error}</p>}
          {health && (
            <div className="health-info">
              <p>
                ✅ 状态: <strong>{health.status}</strong>
              </p>
              <p>
                📦 服务: <strong>{health.service}</strong>
              </p>
              <p>
                🕐 时间: <strong>{formatDateTime(health.timestamp)}</strong>
              </p>
            </div>
          )}
          <button onClick={loadHealth} disabled={loading}>
            刷新健康检查
          </button>
        </Card>

        <Card>
          <h2>API 测试</h2>
          <button onClick={loadGreeting} disabled={loading}>
            获取问候消息
          </button>
          {message && (
            <div className="message">
              <p>{message}</p>
            </div>
          )}
        </Card>

        <Card className="info">
          <h3>📚 快速开始</h3>
          <ul>
            <li>
              后端地址: <code>http://localhost:8080</code>
            </li>
            <li>
              前端地址: <code>http://localhost:5173</code>
            </li>
            <li>
              API 文档: <code>/api/health</code> | <code>/api/hello</code>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

export default OverviewPanel


