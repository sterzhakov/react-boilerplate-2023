// Libs
import React, { PropsWithChildren } from 'react'
import { Provider as StoreProvider } from 'react-redux'

// Initializers
import { createStore } from 'src/initializers/createStore'

// Local types
const Store: React.FC<PropsWithChildren> = (props) => {
  return (
    <StoreProvider store={createStore()}>
      {props.children}
    </StoreProvider>
  )
}

export default Store
