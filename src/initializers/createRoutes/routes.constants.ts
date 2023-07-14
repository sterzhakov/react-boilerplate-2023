export enum AppRouteVariables { postId = 'postId' }
export enum AppRoutePaths {
  // Home
  home = '/',
  postsList = '/posts',
  postsCreate = '/posts/create',
  postsUpdate = `/posts/update/:${AppRouteVariables.postId}`,
  postsShow = `/posts/show/:${AppRouteVariables.postId}`,
  usersLogin = '/users/login',
  usersLogout = '/users/logout',
  // Other
  settings = '/settings',
  notFound = '*',
}
