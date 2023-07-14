// Helpers
import * as BusinessApiHelpers from 'src/helpers/store/businessApi'

export type RequestActionMetaProps = {
  $meta?: {
    isNotificationEnabled: boolean,
  },
}

export type Post = {
  id: number
  userId: number
  title: string
  body: string
}

// Endpoints

export type PostsFindAll = {
  Props: Partial<
    BusinessApiHelpers.Pagination &
    BusinessApiHelpers.Sort &
    Post
  >,
  Result: {
    response: Post[],
    totalCount: number
  },
}

export type PostsFindOne = {
  Props: Pick<Post, 'id'>,
  Result: {
    response: Post,
  },
}

export type PostsCreate = {
  Props: Omit<Post, 'id'>,
  Result: {
    response: Post,
  },
}

export type PostsUpdate = {
  Props: Post,
  Result: {
    response: Post,
  },
}

export type PostsDelete = {
  Props: Pick<Post, 'id'>,
  Result: void,
}
