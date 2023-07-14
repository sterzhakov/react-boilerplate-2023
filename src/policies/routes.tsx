// Hooks
import { useAppAccess } from 'src/hooks/access'

// Initializers
import { AppRoutePaths } from 'src/initializers/createRoutes'

export function useIsCanRoutePolicy() {
  const routeAccess = useAppAccess('routes')
  return function isCanRoute(routePath: AppRoutePaths): boolean {
    return routeAccess[routePath]
  }
}
