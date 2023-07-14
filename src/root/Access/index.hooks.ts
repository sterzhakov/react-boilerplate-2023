// Libs
import { useContext } from 'react'

// Context
import { AccessContext } from '.'

export function useAccessPayload<Permissions extends object>() {
  const accessPayload =
    useContext<{ permissions: Permissions } | null>(AccessContext)
  if (!accessPayload?.permissions) {
    throw new Error('Access context: permissions not provided!')
  }
  return accessPayload
}
