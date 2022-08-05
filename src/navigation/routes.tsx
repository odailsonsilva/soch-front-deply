import { Routes as RoutesDOM, Route } from 'react-router-dom'
import { LinkedInCallback } from 'react-linkedin-login-oauth2'

import { INITIAL_PAGE } from './constants'

import { SignIn } from 'pages/NotAuthenticated/SignIn'
import { NotFoundPage } from 'pages/NotAuthenticated/NotFound'
import { AuthenticatedRoute } from './routesControl/AuthenticatedRoute'
import { GuessRoute } from './routesControl/GuessRoute'

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
