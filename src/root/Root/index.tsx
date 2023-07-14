// Libs
import { PropsWithChildren } from 'react'

// Root
import Initialize from '../Initialize'
import Store from '../Store'

// Local types
export type Props = PropsWithChildren

// Initializers
import { startRequestMocks } from 'src/initializers/createRequestMocks'

// Local inits
startRequestMocks()

const Root: React.FC<Props> = () => {
  return (
    <Store>
      <Initialize />
    </Store>
  )
}

export default Root
