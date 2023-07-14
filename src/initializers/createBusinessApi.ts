// Libs
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Constants
import { BUSINESS_API_URL } from 'src/constants/env'

// Define a service using a base URL and expected endpoints
export const businessApi = createApi({
  reducerPath: 'businessApi',
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({ baseUrl: BUSINESS_API_URL }),
  endpoints: () => ({}),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// export const {
//   usePostsFindAllQuery,
// } = businessApi;
