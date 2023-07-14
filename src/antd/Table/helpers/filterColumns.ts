// Libs
import { ColumnsType } from 'antd/es/table'

export default function filterColumns<T = unknown>
(keys: string[] | undefined, columns: ColumnsType<T>): ColumnsType<T> {
  if (!keys) return columns
  return columns.filter((column) => {
    if (!column.key) return true
    return keys.includes(column.key.toString())
  })
}
