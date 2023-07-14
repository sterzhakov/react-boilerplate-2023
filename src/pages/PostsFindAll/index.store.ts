// Libs
import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'src/initializers/createStore'
import { PostsFindAll } from 'src/requests/business/posts.types'

// Local types

type WidgetState = 'initial' | 'initializing' | 'initialized' | 'error'

interface InitialState {
  table: {
    status: WidgetState
    request: {
      pagination: {
        _page: PostsFindAll['Props']['_page'],
        _limit: PostsFindAll['Props']['_limit'],
      },
      sort: {
        _sort: PostsFindAll['Props']['_sort'],
        _order: PostsFindAll['Props']['_order'],
      },
      search: Omit<
        PostsFindAll['Props'],
        '_page' | '_limit' | '_sort' | '_order'
      >
    }
  }
}

// Local constants

export const INITIAL_STATE: InitialState = {
  table: {
    status: 'initial',
    request: {
      pagination: {
        _page: 1,
        _limit: 10,
      },
      sort: {
        _sort: 'id',
        _order: 'desc',
      },
      search: {}
    }
  },
}

export const pageSlice = createSlice({
  name: 'PostsFindAll',
  initialState: INITIAL_STATE,
  reducers: {
    reset: () => INITIAL_STATE,
    setTableStatus: (state, action: PayloadAction<{ status: WidgetState }>) => {
      state.table.status = action.payload.status
    },
    setTableRequestProps: (
      state,
      action: PayloadAction<Partial<InitialState['table']['request']>>
    ) => {
      const { sort, pagination, search } = action.payload
      if (sort)
        state.table.request.sort = sort
      if (pagination)
        state.table.request.pagination = pagination
      if (search)
        state.table.request.search = search
    },
  },
})

export const selectTableRequestProps = createSelector(
  (state: RootState) => state.PostsFindAll.table.request.pagination,
  (state: RootState) => state.PostsFindAll.table.request.search,
  (state: RootState) => state.PostsFindAll.table.request.sort,
  (pagination, search, sort) => {
    const searchProps: PostsFindAll['Props'] =
      { ...pagination, ...search, ...sort }
    return searchProps
  }
)

export const { reducer } = pageSlice
