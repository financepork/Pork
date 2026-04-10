import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@/shared/contexts/userContext'

export default function ProtectedRoute() {
  const { isLogged, loading } = useUser()

  if (loading) return null

  return isLogged ? <Outlet /> : <Navigate to="/login" replace />
}
