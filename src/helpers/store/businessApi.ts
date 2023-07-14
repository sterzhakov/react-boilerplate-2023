export type Sort = {
  _sort: string,
  _order: 'asc' | 'desc'
}

export type Pagination = {
  _page: number
  _limit: number
}

export const DEFAULT_PAGINATION: Pagination = { _page: 1, _limit: 10 }


// Entities

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}
