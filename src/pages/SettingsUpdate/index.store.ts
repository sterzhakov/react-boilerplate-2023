// Libs
import { createSlice } from '@reduxjs/toolkit'

// Local types

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InitialState {}

// Local constants

export const INITIAL_STATE: InitialState = {}

export const pageSlice = createSlice({
  name: 'SettingsUpdate',
  initialState: INITIAL_STATE,
  reducers: {},
})

export const { reducer } = pageSlice
