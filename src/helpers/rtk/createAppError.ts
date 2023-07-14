// Libs
import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'

// Helpers
import { isNonNullable } from 'src/helpers/array/isNonNullable'

// Local type
export type AppRequestError = {
  title: string
  descriptions: string[]
}

const DEFAULT_ERROR_TITLE = 'Unknown error'

export type RawAppError = FetchBaseQueryError | SerializedError | Error

export function createAppError(error: RawAppError): AppRequestError {
  const errorName = 'name' in error ? `${error.name}` : DEFAULT_ERROR_TITLE

  const errorCode = 'code' in error ? `"${error.code}"` : null

  const errorDescription =
    'description' in error ? `${error.description}` : null

  const errorData = 'data' in error ? `${JSON.stringify(error.data)}` : null

  const errorStack = 'stack' in error ? `${error.stack}` : null

  const title = [errorName, errorCode].join(' ')
  const descriptions = [errorDescription, errorData, errorStack].filter(
    isNonNullable
  )

  return { title, descriptions }
}
