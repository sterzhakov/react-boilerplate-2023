// Initialziers
import { AppRoutePaths } from 'src/initializers/createRoutes'

export type AppPermissions = {
  routes: {
    [key in AppRoutePaths]: boolean
  },
  modules: {
    posts: {
      search: boolean,
    }
  }
}
