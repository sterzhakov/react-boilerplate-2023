// Styles
import styles from './index.module.scss'

// Libs
import { PropsWithChildren } from 'react'

// Local types
export type Props = PropsWithChildren

const TranslationLoader: React.FC<Props> = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.loading}>
        <span className={styles.loadingIcon}>⏱️</span>
        <span className={styles.loadingText}>Translation loading...</span>
      </p>
    </div>
  )
}

export default TranslationLoader
