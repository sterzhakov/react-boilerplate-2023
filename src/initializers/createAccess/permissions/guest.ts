// Initialziers
import { AppRoutePaths } from 'src/initializers/createRoutes'

// Initializers
import { AppPermissions } from '.'

const GUEST_PERMISSIONS: AppPermissions  = {
  routes: {
    [AppRoutePaths.home]: true,
    [AppRoutePaths.postsList]: true,
    [AppRoutePaths.postsCreate]: true,
    [AppRoutePaths.postsUpdate]: false,
    [AppRoutePaths.postsShow]: true,
    [AppRoutePaths.usersLogin]: true,
    [AppRoutePaths.usersLogout]: true,
    [AppRoutePaths.settings]: true,
    [AppRoutePaths.notFound]: true,
  },
  modules: {
    posts: {
      search: false,
    }
  }
}

export default GUEST_PERMISSIONS
