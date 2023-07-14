// Store
import { UserRole } from 'src/root/Initialize/index.store'

// Rules
import GUEST_PERMISSIONS from './permissions/guest'
import AUTHOR_PERMISSIONS from './permissions/author'

export const ROLES_PERMISSIONS = {
  [UserRole.guest]: GUEST_PERMISSIONS,
  [UserRole.author]: AUTHOR_PERMISSIONS,
}

// Initializer

export type Props = {
  role: UserRole
}

export default function createAccess(props: Props) {
  const { role } = props
  return { permissions: ROLES_PERMISSIONS[role] }
}
