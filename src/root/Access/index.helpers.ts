// Libs
import { getByPath, Path } from 'dot-path-value'

export type PermissionProps<Permissions> = {
  path: Path<Permissions>,
  permissions: Permissions
}
export const translate =
<Permissions extends object>(props: PermissionProps<Permissions>): string => {
  const { path, permissions } = props
  const permission = getByPath(permissions, path)
  if (typeof permission === 'undefined')
    throw new Error(`Permissions path: "${path}" not found!`)
  return permission
}

