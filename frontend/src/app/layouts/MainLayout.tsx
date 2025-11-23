import { NavLink, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="logo">
          <span className="logo-mark">L</span>
          <span className="logo-text">LAZYGOXV</span>
        </div>

        <nav className="app-nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            控制台
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            登录
          </NavLink>
        </nav>
      </header>

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout


