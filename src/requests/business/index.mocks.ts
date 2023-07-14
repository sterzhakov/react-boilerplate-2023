// src/mocks/handlers.js
import { rest, RestHandler } from 'msw'

import { PostsFindAll, PostsFindOne } from './posts.types'

// Constants
import { BUSINESS_API_URL } from 'src/constants/env'
import delay from 'delay'

// Entity template
const POST = {
  userId: 1,
  id: 1,
  title: 'Test',
  body: 'body',
}

const getPosts = rest.get<
{ _page: string, _limit: string },
  object,
  PostsFindAll['Result']['response']
>(`${BUSINESS_API_URL}/posts`, async (req, res, ctx) => {
  const _page = req.url.searchParams.get('_page');
  const posts = Array(10)
    .fill(null)
    .map((item, index) => {
      const order = index + (10 * parseFloat(_page || '') - 10)
      return {
        ...POST,
        id: order,
        userId: order,
        title: POST.title + ` ${order}`,
        body: POST.body + ` ${order}`,
      }
    })
  return res(
    // Respond with a 200 status code
    // ctx.status(500),
    ctx.status(200),
    ctx.json(posts),
    ctx.set('X-Total-Count', (posts.length * 3).toString())
  )
})

const getPost = rest.get<
{ _page: string, _limit: string },
  { postId: string },
  PostsFindOne['Result']['response']
>(`${BUSINESS_API_URL}/posts/:postId`, async (req, res, ctx) => {
  await delay(3000)
  return res(
    ctx.status(200),
    ctx.json({
      ...POST,
      id: parseFloat(req.params.postId || '0'),
    }),
  )
})

const handlers: RestHandler[] = [
  // getPosts,
  // getPost
]

export default handlers
