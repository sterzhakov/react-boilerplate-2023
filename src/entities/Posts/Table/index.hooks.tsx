// Libs
import { Space } from 'src/antd'
import { Link } from 'react-router-dom'
import { ColumnsType } from 'antd/es/table'

// Initializers
import { AppRoutes } from 'src/initializers/createRoutes'

// Requests
import { Post } from 'src/requests/business/posts.types'
import filterColumns from 'src/antd/Table/helpers/filterColumns'

// Hooks
import { useAppTranslation } from 'src/hooks/translation'

// Local types
export type Props = {
  columnKeys?: PostColumns[] | undefined
}

export enum PostColumns {
  id = 'id',
  title = 'title',
  userId = 'userId',
  action = 'action',
}

export function useColumns(props: Props = {}): ColumnsType<Post> {
  const { columnKeys } = props

  const t = useAppTranslation()

  return filterColumns(columnKeys, [
    {
      dataIndex: 'id',
      key: PostColumns.id,
      title: t('entities.Posts.Table.columns.id.label'),
      sorter: true,
    },
    {
      dataIndex: 'title',
      key: PostColumns.title,
      title: t('entities.Posts.Table.columns.title.label'),
      sorter: true,
      render(value, record) {
        return (
          <Link
            to={AppRoutes.postsShow.createPath({ postId: record.id })}
          >
            {value}
          </Link>
        )
      },
    },
    {
      dataIndex: 'userId',
      key: PostColumns.userId,
      title: t('entities.Posts.Table.columns.userId.label'),
      sorter: true,
    },
    {
      title: t('entities.Posts.Table.columns.actions.label'),
      key: PostColumns.action,
      render: (_, post) => (
        <Space size='middle'>
          <Link to={AppRoutes.postsUpdate.createPath({ postId: post.id || 0 })}>
            Edit
          </Link>
        </Space>
      ),
    },
  ])
}
