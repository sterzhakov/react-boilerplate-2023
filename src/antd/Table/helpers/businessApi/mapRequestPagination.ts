// Libs
import { TablePaginationConfig } from 'antd/es/table/interface'

// Store
import * as businessApi from 'src/helpers/store/businessApi'

export default function
mapRequestPagination(tablePagination: TablePaginationConfig):
businessApi.Pagination | undefined {
  if (!tablePagination.current || !tablePagination.pageSize) return

  return {
    _page: tablePagination.current,
    _limit: tablePagination.pageSize,
  }
}
