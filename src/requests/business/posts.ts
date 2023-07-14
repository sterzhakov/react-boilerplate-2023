// Requests
import { providesList } from 'src/helpers/store/rtk'
import {
  PostsFindAll,
  PostsFindOne,
  PostsCreate,
  PostsDelete,
  PostsUpdate,
} from './posts.types'

// Initializers
import { businessApi } from 'src/initializers/createBusinessApi'

// Local types

export const postsApi = businessApi.injectEndpoints({
  endpoints: (builder) => ({
    postsFindAll: builder.query<PostsFindAll['Result'], PostsFindAll['Props']>({
      query: (props) => ({
        method: 'GET',
        url: '/posts',
        params: props,
      }),
      transformResponse(response: PostsFindAll['Result']['response'], meta) {
        return {
          response,
          totalCount: Number(meta?.response?.headers.get('X-Total-Count')),
        }
      },
      providesTags: (result) => providesList(result?.response, 'Posts'),
    }),
    postsFindOne: builder.query<PostsFindOne['Result'], PostsFindOne['Props']>({
      query: (props) => ({
        method: 'GET',
        url: `/posts/${props.id}`,
      }),
      transformResponse(response: PostsFindOne['Result']['response']) {
        return { response }
      },
      providesTags: (result, error, props) => [{ type: 'Posts', id: props.id }],
    }),
    postsCreate: builder.mutation<PostsCreate['Result'], PostsCreate['Props']>({
      query: (props) => ({
        method: 'POST',
        url: '/posts',
        body: props,
      }),
      invalidatesTags: ['Posts'],
    }),
    postsUpdate: builder.mutation<PostsUpdate['Result'], PostsUpdate['Props']>({
      query: (props) => ({
        method: 'PATCH',
        url: `/posts/${props.id}`,
        body: props,
      }),
      invalidatesTags: (result, error, props) => [
        { type: 'Posts', id: props.id },
      ],
    }),
    postsDelete: builder.mutation<PostsDelete['Result'], PostsDelete['Props']>({
      query: (props) => ({
        method: 'DELETE',
        url: `/posts/${props.id}`,
      }),
      invalidatesTags: (result, error, props) => [
        { type: 'Posts', id: props.id },
      ],
    }),
  }),
})

export const {
  usePostsFindAllQuery,
  usePostsFindOneQuery,
  usePostsCreateMutation,
  usePostsUpdateMutation,
  usePostsDeleteMutation,
} = postsApi
