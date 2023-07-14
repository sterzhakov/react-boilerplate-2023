// Libs
import { useLoaderData } from 'react-router';

// Initializers
import { AppRouterLoader } from 'src/initializers/createRoutes';

export function useAppLoaderData() {
  const loaderData = useLoaderData() as AppRouterLoader
  if (!loaderData) throw new Error('React router loader data not provided!')
  return loaderData
}
