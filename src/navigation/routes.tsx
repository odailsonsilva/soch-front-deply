import React from 'react'
import { Routes as RoutesDOM, Route } from 'react-router-dom'

import { INITIAL_PAGE } from './constants'

const ClassesPage = React.lazy(() => import('pages/ClassesPage'))

import { AuthenticatedRoute } from './routesControl/AuthenticatedRoute'

export const Routes = () => {
  return (
    <RoutesDOM>
      <Route
        path={INITIAL_PAGE}
        element={
          <AuthenticatedRoute>
            <ClassesPage />
          </AuthenticatedRoute>
        }
      />

      <Route path="*" element={<div>nao encontrado</div>} />
    </RoutesDOM>
  )
}
