import React from 'react'
import { Routes as RoutesDOM, Route } from 'react-router-dom'

import { INITIAL_PAGE, AULAS, CATEGORY, SUB_CATEGORY } from './constants'

const ClassesPage = React.lazy(() => import('pages/ClassesPage'))
const AllClasses = React.lazy(() => import('pages/AllClasses'))
const Lessons = React.lazy(() => import('pages/Lessons'))
const Subjects = React.lazy(() => import('pages/Subjects'))

import { AuthenticatedRoute } from './routesControl/AuthenticatedRoute'

export const Routes = () => {
  return (
    <RoutesDOM>
      <Route
        path={INITIAL_PAGE}
        element={
          <AuthenticatedRoute>
            <AllClasses />
          </AuthenticatedRoute>
        }
      />

      <Route
        path={AULAS}
        element={
          <AuthenticatedRoute>
            <Lessons />
          </AuthenticatedRoute>
        }
      />

      <Route
        path={CATEGORY}
        element={
          <AuthenticatedRoute>
            <Subjects />
          </AuthenticatedRoute>
        }
      />

      <Route
        path={SUB_CATEGORY}
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
