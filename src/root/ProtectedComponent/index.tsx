// Libs
import { PropsWithChildren } from 'react'
import { AppPermissionsPath, useIsCanAccess } from 'src/hooks/access'

// Local types
export type Props = PropsWithChildren<{
  path: AppPermissionsPath,
  dumb?: React.ReactNode,
}>

const ProtectedComponent: React.FC<Props> = (props) => {
  const { children, dumb, path } = props
  const isComponentVisible = useIsCanAccess(path)
  if (isComponentVisible) return children
  return dumb
}

export default ProtectedComponent
