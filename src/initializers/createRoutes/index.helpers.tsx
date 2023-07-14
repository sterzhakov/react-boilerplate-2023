// Libs
import { RouteObject } from 'react-router';

// Initializers
import { AppRoutePaths } from 'src/initializers/createRoutes'
import { Permissions } from 'src/root/Access';

// Local helpers
export function isAppRoute(value?: string): value is AppRoutePaths {
  if (!value) return false
  return Object.values<string>(AppRoutePaths).includes(value);
}

export function isProtectedRoute(routesAccess: Permissions['access']) {
  return (route: RouteObject) => {
    if (!isAppRoute(route.path)) return true
    return !routesAccess[route.path]
  }
}

export function mapNestedRoutes(
  createNextRoute: (
    routeObject: RouteObject,
    index: number,
    nestingLevel: number
  ) => RouteObject,
  routes: RouteObject[],
  nestingLevel = 0,
): RouteObject[] {
  return routes.reduce((nextRoutes, route, index) => {
    const nextRoute = createNextRoute(route, index, nestingLevel)
    if (nextRoute.children) {
      nextRoutes.push({
        ...nextRoute,
        children: mapNestedRoutes(
          createNextRoute,
          nextRoute.children,
          nestingLevel + 1
        )
      })
    } else {
      nextRoutes.push(nextRoute)
    }
    return nextRoutes
  }, [] as RouteObject[])
}

export type BaseAppRouteLoader = { path: string }
export function route(
  routeObject: Omit<RouteObject, 'children'>,
  ...restChildren: RouteObject[]
): RouteObject {
  // Becase route object contains two types:
  // IndexRouteObject or NonIndexRouteObject
  const childrenProps = restChildren.length === 0
    ? { children: undefined, index: true }
    : { children: restChildren, index: undefined }
  // const
  return {
    ...routeObject,
    ...childrenProps,
    loader: (...args) => {
      const loaderResult =
        routeObject?.loader ? routeObject?.loader?.(...args) : {}
      return {
        path: routeObject.path,
        ...loaderResult,
      }
    },
  }
}
