// Initialziers
import { AppRoutePaths } from 'src/initializers/createRoutes'

// Initializers
import { AppPermissions } from '.'

const AUTHOR_PERMISSIONS: AppPermissions  = {
  routes: {
    [AppRoutePaths.home]: true,
    [AppRoutePaths.postsList]: true,
    [AppRoutePaths.postsCreate]: true,
    [AppRoutePaths.postsUpdate]: true,
    [AppRoutePaths.postsShow]: true,
    [AppRoutePaths.usersLogin]: true,
    [AppRoutePaths.usersLogout]: true,
    [AppRoutePaths.settings]: true,
    [AppRoutePaths.notFound]: true,
  },
  modules: {
    posts: {
      search: true,
    }
  }
}

export default AUTHOR_PERMISSIONS
