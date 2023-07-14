// Libs
import { RouteObject } from 'react-router'

// Components/root
import NotFound from 'src/root/NotFound'
import LayoutMain from 'src/root/LayoutMain'
import RouterErrorBoundary from 'src/root/RouterErrorBoundary'
// Component/pages
import PostsList from 'src/pages/PostsFindAll'
import PostsCreate from 'src/pages/PostsCreate'
import PostsUpdate from 'src/pages/PostsUpdate'
import PostsShow from 'src/pages/PostsFindOne'
import SettingsUpdate from 'src/pages/SettingsUpdate'

// Constants
import { AppRoutePaths } from './routes.constants'
export { AppRoutePaths } from './routes.constants'

// Routes
import { POSTS_ROUTES } from './routes/posts'
import { USERS_ROUTES } from './routes/users'

// Helpers
import { BaseAppRouteLoader, route } from './index.helpers'

// Local constants
export const AppRoutes = {
  home: { path: AppRoutePaths.home },
  notFound: { path: AppRoutePaths.notFound },
  accessDenied: { path: AppRoutePaths.notFound },
  settings: { path: AppRoutePaths.settings },
  ...POSTS_ROUTES,
  ...USERS_ROUTES,
}

// Local types

export type AppRouterLoader = BaseAppRouteLoader

export default function createRoutes(): RouteObject[] {
  return [
    route({
      path: AppRoutes.home.path,
      element: <LayoutMain />,
      errorElement: <RouterErrorBoundary />,
    },
      route({
        path: AppRoutes.home.path,
        index: true,
        element: 'Home',
      }),
      route({
        path: AppRoutes.postsList.path,
        element: <PostsList />,
      },
        route({
          path: AppRoutes.postsCreate.path,
          element: <PostsCreate />,
          loader: () => ({ route: AppRoutes.postsCreate.path, }),
        }),
        route({
          path: AppRoutes.postsUpdate.path,
          element: <PostsUpdate />,
        }),
        route({
          path: AppRoutes.postsShow.path,
          element: <PostsShow />,
        }),
      ),
      route({
        path: AppRoutes.settings.path,
        element: <SettingsUpdate />,
      }),
      route({
        path: AppRoutes.notFound.path,
        element: <NotFound />,
      }),
    ),
  ]
}
