import React from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

export const AuthenticatedRoute = ({ children }: Props) => {
  const userAuthenticated = true

  return userAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}
