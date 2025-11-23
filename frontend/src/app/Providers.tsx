import { ReactNode } from 'react'

type ProvidersProps = {
  children: ReactNode
}

/**
 * 统一挂载应用级 Provider
 * 例如：主题、状态管理、国际化、数据缓存等
 */
const AppProviders = ({ children }: ProvidersProps) => {
  return <>{children}</>
}

export default AppProviders


