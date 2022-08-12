import AppTemplate from 'components/templates/AppTemplate'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

export const AuthenticatedRoute = ({ children }: Props) => {
  const userAuthenticated = true

  return userAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}
