import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DashboardPage from '../pages/DashboardPage'
import LoginPage from '../pages/LoginPage'

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default AppRouter


