// Constants
import { AppRoutePaths, AppRouteVariables } from '../routes.constants';

// Libs
import { generatePath, Params } from 'react-router'

// Local types
export type PostsUpdateRoute = {
  routeParams: Partial<Params<AppRouteVariables.postId>>,
  createPathProps: { [AppRouteVariables.postId]: number },
  appParams: { [AppRouteVariables.postId]?: number }
}
export type PostsFindOneRoute = {
  routeParams: Partial<Params<AppRouteVariables.postId>>
  createPathProps: { [AppRouteVariables.postId]: number },
  appParams: { [AppRouteVariables.postId]: number }
}

// Local helpers
function mapPathParamsToApp(props: PostsUpdateRoute['routeParams']):
PostsFindOneRoute['appParams'] | null {
  const { postId } = props
  if (!postId) return null
  return { postId: parseFloat(postId) }
}

// Local routes
export const POSTS_ROUTES = {
  postsList: {
    path: AppRoutePaths.postsList,
  },
  postsCreate: {
    path: AppRoutePaths.postsCreate,
  },
  postsUpdate: {
    path: AppRoutePaths.postsUpdate,
    mapPathParamsToApp,
    createPath(props: PostsUpdateRoute['createPathProps']): string {
      return generatePath(
        AppRoutePaths.postsUpdate,
        { postId: props.postId.toString() }
      )
    },
  },
  postsShow: {
    path: AppRoutePaths.postsShow,
    mapPathParamsToApp,
    createPath(props: PostsFindOneRoute['createPathProps']): string {
      return generatePath(
        AppRoutePaths.postsShow,
        { postId: props.postId.toString() }
      )
    },
  },
}
