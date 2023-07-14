// Libs
import { PropsWithChildren } from 'react'

// Components
import { Table, TableProps } from 'src/antd'

// Helpers
import { useColumns, Props as CreateColumnsProps } from './index.hooks'
import { RawAppError } from 'src/helpers/rtk/createAppError'

// Requests
import * as BusinessApiHelpers from 'src/helpers/store/businessApi'

// Store
import RequestErrorAlert from 'src/root/RequestErrorAlert'

// Local types

export type Props = PropsWithChildren<{
  tableProps: TableProps<BusinessApiHelpers.Post>
  request?: { error?: RawAppError }
  columnsProps?: CreateColumnsProps,
}>

const PostsTable: React.FC<Props> = (props) => {
  const { tableProps, request, columnsProps } = props

  // Inits
  const columns = useColumns(columnsProps)

  return (
    <RequestErrorAlert error={request?.error}>
      <Table<BusinessApiHelpers.Post>
        rowKey='id'
        columns={columns}
        {...tableProps}
      />
    </RequestErrorAlert>
  )
}

export default PostsTable
