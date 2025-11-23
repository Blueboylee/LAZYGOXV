import { FormEvent } from 'react'
import { useAuthState } from '../state/useAuthState'
import Card from '../../../shared/components/Card'

const LoginForm = () => {
  const { email, password, rememberMe, status, setEmail, setPassword, toggleRememberMe, setStatus } = useAuthState()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus(`模拟登录：${email}（记住我：${rememberMe ? '是' : '否'}）`)
  }

  return (
    <Card className="login-card">
      <div className="login-card__header">
        <h1>欢迎回来 👋</h1>
        <p>请登录以继续访问 LAZYGOXV 控制台</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-form__label">
          邮箱
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="login-form__label">
          密码
          <input
            type="password"
            placeholder="请输入密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <div className="login-form__actions">
          <label className="remember-me">
            <input type="checkbox" checked={rememberMe} onChange={toggleRememberMe} />
            记住我
          </label>
          <button type="button" className="link-button">
            忘记密码？
          </button>
        </div>

        <button className="primary-button" type="submit">
          登录
        </button>
      </form>

      {status && <p className="login-status">{status}</p>}

      <div className="login-card__footer">
        <p>还没有账号？</p>
        <button type="button" className="secondary-button">
          立即注册
        </button>
      </div>
    </Card>
  )
}

export default LoginForm


