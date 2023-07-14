// Libs
import { useMemo } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Initializers
import createRoutes from 'src/initializers/createRoutes'

// Initializers
import { useAppAccess } from 'src/hooks/access'

// Constants
import { REACT_APP_ROUTER_BASE_URL } from 'src/constants/env'

const AppRouter: React.FC = () => {
  const routesAccess = useAppAccess('routes')
  const router = useMemo(() => {
    const routes = createRoutes()
    return createBrowserRouter(routes, { basename: REACT_APP_ROUTER_BASE_URL })
  }, [routesAccess])

  return <RouterProvider router={router} />
}

export default AppRouter
