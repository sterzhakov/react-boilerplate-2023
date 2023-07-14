// Styles
import styles from './index.module.scss'
import classNames from 'classnames'

// Hooks
import { useAppTranslation } from 'src/hooks/translation'

// Libs
import { Table as AntdTable } from 'antd'
export type { TableProps } from 'antd'

// Store
import { RefTable } from 'antd/es/table/interface'

const Table: RefTable = (props) => {
  const t = useAppTranslation()

  return (
    <AntdTable
      {...props}
      locale={{
        triggerDesc: t('antd.Table.triggerDesc'),
        triggerAsc: t('antd.Table.triggerAsc'),
        cancelSort: t('antd.Table.cancelSort')
      }}
      pagination={{
        ...props.pagination,
        className: classNames(
          typeof props.pagination === 'object'
            ? props.pagination.className
            : undefined,
          styles.pagination
        )
      }}
    />
  )
}

export const {
  SELECTION_COLUMN,
  EXPAND_COLUMN,
  SELECTION_ALL,
  SELECTION_INVERT,
  SELECTION_NONE,
  Column,
  ColumnGroup,
  Summary,
} = AntdTable

export default Table
