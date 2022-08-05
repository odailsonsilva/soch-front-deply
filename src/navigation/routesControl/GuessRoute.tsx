import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { INITIAL_PAGE } from 'navigation/constants'

interface Props {
  children: React.ReactElement
}

export const GuessRoute = ({ children }: Props) => {
  const userAuthenticated = true

  return userAuthenticated ? <Navigate to={INITIAL_PAGE} replace /> : <Outlet />
}
