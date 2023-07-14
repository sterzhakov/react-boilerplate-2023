// Libs
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// Requests
import * as PostsRequest from 'src/requests/business/posts'

// Entities
import PostsTable, { Props as PostsTableProps } from 'src/entities/Posts/Table'

// Store
import { pageSlice, selectTableRequestProps } from '../../index.store'
import { useAppSelector } from 'src/hooks/store'
import mapRequestSort from 'src/antd/Table/helpers/businessApi/mapRequestSort'
import mapRequestPagination from 'src/antd/Table/helpers/businessApi/mapRequestPagination'

// Local helpers

const Table: React.FC = function Table() {
  const dispatch = useDispatch()

  const requestProps = useAppSelector(selectTableRequestProps)

  const { data, error, isFetching, isLoading, isSuccess, isError } =
    PostsRequest.usePostsFindAllQuery(requestProps)

  useEffect(() => {
    if (!isLoading) return
    dispatch(
      pageSlice.actions.setTableStatus({ status: 'initializing' })
    )
  }, [isLoading])

  useEffect(() => {
    if (!isSuccess) return
    dispatch(
      pageSlice.actions.setTableStatus({ status: 'initialized' })
    )
  }, [isSuccess])

  useEffect(() => {
    if (!isError) return
    dispatch(
      pageSlice.actions.setTableStatus({ status: 'error' })
    )
  }, [isError])

  const handleTableChange: PostsTableProps['tableProps']['onChange'] =
  (pagination, _filters, sorter) => {
    dispatch(
      pageSlice.actions.setTableRequestProps({
        pagination: mapRequestPagination(pagination),
        sort: mapRequestSort(sorter)
      })
    )
  }

  return (
    <PostsTable
      request={{ error }}
      tableProps={{
        loading: isFetching,
        dataSource: data?.response,
        onChange: handleTableChange,
        pagination: {
          total: data?.totalCount,
          current: requestProps._page,
          pageSize: requestProps._limit,
        }
      }}
    />
  )
}

export default Table
