import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

import RootPage from '@pages/RootPage'
import PublicRoute from '@components/template/PublicRoute'
// TODO create private page wrapped by PrivateRoute
// import PrivateRoute from '@components/template/PrivateRoute'

import ROUTE_PATHS from './routes.path'

// Code splitting
const Homepage = lazy(() => import('@pages/Homepage'))

const router = createBrowserRouter(
  [
    {
      path: ROUTE_PATHS.HOME,
      element: <RootPage />,
      children: [
        {
          index: true,
          element: (
            <PublicRoute title="Homepage">
              <Homepage />
            </PublicRoute>
          ),
        },
      ],
    },
  ],
  { basename: '/' },
)

export default router
