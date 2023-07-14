// Libs
import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

// Entity
import PostsTable, { Props as PostsTableProps } from './index'
import { POSTS } from './stories/fixtures'
import { Post } from 'src/helpers/store/businessApi'
import { sliceItems, sortItems } from 'src/antd/Table/helpers/storybook'
import { PostColumns } from './index.hooks'

// Local constants

const DEFAULT_PAGE_SIZE = 5
const COLUMN_PROPS_COLUMN_KEYS = Object.values(PostColumns)

// Local types

type StoryProps = {
  ['columnsProps_columnKeys']:
    NonNullable<PostsTableProps['columnsProps']>['columnKeys']
}

// Story

const meta: Meta<PostsTableProps & StoryProps> = {
  component: PostsTable,
  args: {
    ['columnsProps_columnKeys']: COLUMN_PROPS_COLUMN_KEYS
  },
  argTypes: {
    ['columnsProps_columnKeys']: {
      control: {
        type: 'check',
      },
      options: COLUMN_PROPS_COLUMN_KEYS,
    }
  }
}

type Story = StoryObj<PostsTableProps & StoryProps>

// Local stories

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => {
    const [posts, setPosts] = useState<Post[]>(
      POSTS.slice(0, DEFAULT_PAGE_SIZE)
    )
    return (
      <PostsTable
        columnsProps={{
          columnKeys: args['columnsProps_columnKeys'],
        }}
        tableProps={{
          dataSource: posts,
          onChange(pagination, filters, sorter) {
            const pageSize = pagination.pageSize || DEFAULT_PAGE_SIZE
            const pageCurrent = pagination.current || 1
            const sliceFrom = pageSize * pageCurrent - pageSize
            const sliceTo = sliceFrom + pageSize
            setPosts(sliceItems(sliceFrom, sliceTo, sortItems(sorter, POSTS)))
          },
          pagination: {
            defaultCurrent: 1,
            defaultPageSize: DEFAULT_PAGE_SIZE,
            total: POSTS.length,
          },
        }}
      />
    )
  },
}

export default meta
