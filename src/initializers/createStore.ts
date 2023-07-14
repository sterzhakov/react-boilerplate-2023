// Libs
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { debounce } from 'debounce'

// Initializers
import { businessApi } from './createBusinessApi'

// Pages
import * as PostsFindAll from 'src/pages/PostsFindAll/index.store'
import * as SettingsUpdate from 'src/pages/SettingsUpdate/index.store'
// Modules
import * as InitializeModule from 'src/root/Initialize/index.store'


// Initializers
// import { rtkQueryErrorLogger } from './reduxMiddlewares/rtkQueryErrorLogger'

export const createStore = () => {
  const store = configureStore({
    reducer: {
      // Pages
      [businessApi.reducerPath]: businessApi.reducer,
      [PostsFindAll.pageSlice.name]: PostsFindAll.reducer,
      [SettingsUpdate.pageSlice.name]: SettingsUpdate.reducer,
      // Modules
      [InitializeModule.moduleSlice.name]: InitializeModule.reducer,
    },
    preloadedState: {
      [InitializeModule.moduleSlice.name]:
        InitializeModule.persist.getStateFromLocalStorage(),
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(businessApi.middleware)
        // .concat(rtkQueryErrorLogger),
  })

  store.subscribe(
    debounce(() => {
      InitializeModule.persist
        .setStateToLocalStorage(store.getState().InitializeModule);
    }, 800)
  )

  setupListeners(store.dispatch)

  return store
}


export type Store = ReturnType<typeof createStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<Store['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = Store['dispatch']
