// Libs
import { useMemo } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Initializers
import createRoutes from 'src/initializers/createRoutes'

// Initializers
import { useAppAccess } from 'src/hooks/access'

const AppRouter: React.FC = () => {
  const routesAccess = useAppAccess('routes')
  const router = useMemo(() => {
    const routes = createRoutes()
    return createBrowserRouter(routes)
  }, [routesAccess])

  return <RouterProvider router={router} />
}

export default AppRouter
