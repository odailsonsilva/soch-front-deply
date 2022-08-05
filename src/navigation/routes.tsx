import { Routes as RoutesDOM, Route } from 'react-router-dom'

import { INITIAL_PAGE } from './constants'

import { AuthenticatedRoute } from './routesControl/AuthenticatedRoute'

export const Routes = () => {
  return (
    <RoutesDOM>
      <Route
        path={INITIAL_PAGE}
        element={
          <AuthenticatedRoute>
            <div>teste</div>
          </AuthenticatedRoute>
        }
      />

      <Route path="*" element={<div>nao encontrado</div>} />
    </RoutesDOM>
  )
}
