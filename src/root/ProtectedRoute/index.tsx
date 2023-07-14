// Libs
import { useMatches } from 'react-router'
import { PropsWithChildren, useMemo } from 'react'

// Hooks
import { useAppAccess } from 'src/hooks/access'
import { useAppLoaderData } from 'src/hooks/router'

// Initializers
import { isAppRoute } from 'src/initializers/createRoutes/index.helpers'

// Root
import AccessDenied from '../AccessDenied'

// Local types
export type Props = PropsWithChildren

const ProtectedRoute: React.FC<Props> = (props) => {
  const { children } = props
  const matches = useMatches()
  const accessRoutes = useAppAccess('routes')
  const loaderData = useAppLoaderData()

  const isAllowedRoute = useMemo(() => {
    if (!isAppRoute(loaderData.path)) {
      throw new Error(`React router LoaderData.path ${loaderData.path} not exists!`)
    }
    return accessRoutes[loaderData.path]
  }, [matches])

  const isProtectedRoute = !isAllowedRoute

  if (!isProtectedRoute) return children

  return (
    <AccessDenied />
  )
}

export default ProtectedRoute
