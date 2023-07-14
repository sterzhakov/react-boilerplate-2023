// Libs
import * as R from 'ramda'
import { SorterResult } from 'antd/lib/table/interface'

export function sliceItems<T>(sliceFrom: number, sliceTo: number, items: T[]) {
  return R.slice(sliceFrom, sliceTo, items)
}

export function sortItems<
  Key extends number | string | symbol,
  Value extends string | number,
  TItem extends Record<Key, Value>
>(
  sorterOneOrMany: SorterResult<TItem> | SorterResult<TItem>[],
  items: TItem[]
): TItem[] {
  const [sorter] = Array.isArray(sorterOneOrMany)
    ? sorterOneOrMany : [sorterOneOrMany]
  const order = sorter.order
  const columnKey = sorter.columnKey
  if (!sorter || !columnKey || !order) return items
  const sortByColumn = R[order]<TItem>((item) => item[columnKey as Key])
  return R.sort(sortByColumn, items)
}
