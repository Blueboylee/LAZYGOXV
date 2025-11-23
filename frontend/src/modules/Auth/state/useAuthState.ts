import { useState } from 'react'

/**
 * 模块内的状态管理（可替换为 Zustand / Jotai 等）
 */
export const useAuthState = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [status, setStatus] = useState<string | null>(null)

  const toggleRememberMe = () => setRememberMe((prev) => !prev)

  return {
    email,
    password,
    rememberMe,
    status,
    setEmail,
    setPassword,
    toggleRememberMe,
    setStatus,
  }
}


