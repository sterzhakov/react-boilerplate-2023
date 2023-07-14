// Libs
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { APP_VERSION } from 'src/constants/env'

// Constants
import { AppLocales, DEFAULT_LOCALE } from '../../initializers/createTranslations'

// Initializers
import { RootState } from 'src/initializers/createStore'

// Local types

export enum UserRole {
  guest = 'guest',
  author = 'author',
}

export type User = {
  role: UserRole
}

interface InitialState {
  persistKey: string,
  localSettings: {
    locale: AppLocales,
  },
  user: User
}

// Local constants

export const MODULE_KEY = 'InitializeModule'

export const INITIAL_STATE: InitialState = {
  persistKey: APP_VERSION,
  localSettings: {
    locale: DEFAULT_LOCALE
  },
  user: {
    role: UserRole.guest,
  }
}

// Selectors

export function selectLocale(state: RootState) {
  return state.InitializeModule.localSettings.locale
}

export function selectUser(state: RootState) {
  return state.InitializeModule.user
}

// Persist

export const persist = {
  getStateFromLocalStorage: (): InitialState | undefined => {
    try {
      const jsonAsString = localStorage.getItem(moduleSlice.name)
      const jsonOrUndefined = jsonAsString
        ?  JSON.parse(jsonAsString) as InitialState
        : undefined
      if (!jsonOrUndefined || jsonOrUndefined.persistKey !== APP_VERSION) return
      const json = jsonOrUndefined;
      return {
        ...INITIAL_STATE,
        localSettings: json.localSettings,
      }
    } catch (e) {
      return undefined
    }
  },

  setStateToLocalStorage: async (state: InitialState): Promise<void> => {
    try {
      const serializedState =
        JSON.stringify({
          ...INITIAL_STATE,
          localSettings: state.localSettings,
        })
      localStorage.setItem(moduleSlice.name, serializedState);
    } catch (e) {
      // Ignore
    }
  }
}

// State

export const moduleSlice = createSlice({
  name: MODULE_KEY,
  initialState: INITIAL_STATE,
  reducers: {
    setLocalSettings: (
      state,
      action: PayloadAction<InitialState['localSettings']>
    ) => {
      state.localSettings = action.payload
    },
  },
})

export const { reducer } = moduleSlice
