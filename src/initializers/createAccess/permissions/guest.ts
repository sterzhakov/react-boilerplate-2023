// Initialziers
import { AppRoutePaths } from 'src/initializers/createRoutes'

// Initializers
import { AppPermissions } from '.'

const GUEST_PERMISSIONS: AppPermissions  = {
  routes: {
    [AppRoutePaths.home]: true,
    [AppRoutePaths.postsList]: true,
    [AppRoutePaths.postsCreate]: false,
    [AppRoutePaths.postsUpdate]: false,
    [AppRoutePaths.postsShow]: true,
    [AppRoutePaths.usersLogin]: true,
    [AppRoutePaths.usersLogout]: false,
    [AppRoutePaths.settings]: false,
    [AppRoutePaths.notFound]: true,
  },
  modules: {
    posts: {
      search: false,
    }
  }
}

export default GUEST_PERMISSIONS
