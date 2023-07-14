// Libs
import { PropsWithChildren, createContext } from 'react'

// Local context

export type AccessContextType<
  TPermissions extends Permissions = Permissions
> = { permissions: TPermissions }
export const AccessContext = createContext<AccessContextType | null>(null);

// Local types

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Permissions = any

export type Props = PropsWithChildren<{
  permissions: Permissions,
}>

const Access: React.FC<Props> = (props) => {
  const { children, permissions } = props
  return (
    <AccessContext.Provider
      value={{ permissions }}
    >
      {children}
    </AccessContext.Provider>
  )
}

export default Access
