// Styles
import styles from './index.module.scss'

// Libs
import { PropsWithChildren } from 'react'

// Local types
type Props = PropsWithChildren

const SearchWrapper: React.FC<Props> = (props) => {
  return (
    <div
      className={styles.wrapper}
      {...props}
    />
  )
}

export default SearchWrapper
