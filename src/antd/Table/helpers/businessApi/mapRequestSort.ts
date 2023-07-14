// Libs
import { SorterResult } from 'antd/es/table/interface'

// Store
import * as businessApi from 'src/helpers/store/businessApi'

// Local constants

const TABLE_SORT_TO_REQUEST = {
  ascend: 'asc',
  descend: 'desc',
} as const

export default function mapRequestSort<T>(
  tableSorterOrSorters: SorterResult<T> | SorterResult<T>[]
): businessApi.Sort | undefined {
  const [tableSorter] = Array.isArray(tableSorterOrSorters)
    ? tableSorterOrSorters
    : [tableSorterOrSorters]

  if (!tableSorter.order || !tableSorter.columnKey) return

  return {
    _order: TABLE_SORT_TO_REQUEST[tableSorter.order],
    _sort: tableSorter.columnKey.toString(),
  }
}
