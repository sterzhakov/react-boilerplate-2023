// Libs
import { getByPath, Path } from 'dot-path-value';

// Store
import { User, UserRole } from 'src/root/Initialize/index.store';

// Root
import { useAccessPayload } from 'src/root/Access/index.hooks';
import { AccessContextType } from 'src/root/Access';

// Initializers
import { AppPermissions } from 'src/initializers/createAccess/permissions';

// Local types
export type AppPermissionsPath = Path<AppPermissions>

// Local hooks
export const useAppUser: () => User = () => ({ role: UserRole.guest })
export const useAppAccessPayload: () => AccessContextType<AppPermissions> = useAccessPayload
export const useAppAccess = (path: AppPermissionsPath) => {
  const appAccessPayload = useAppAccessPayload()
  const permission = getByPath(appAccessPayload.permissions, path)
  return permission
}
export function useIsCanAccess(path: AppPermissionsPath) {
  const componentAccess = useAppAccess(path)
  if (typeof componentAccess !== 'boolean') {
    throw new Error('ProtectedComponent path should be a boolean value!')
  }
  return componentAccess
}
