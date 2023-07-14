// Styles
import styles from './index.module.scss'

// Libs
import React, { PropsWithChildren } from 'react'
import classNames from 'classnames'
import AppSpin from '../AppSpin'
import { useAppTranslation } from 'src/hooks/translation'

// Local types
type Props = PropsWithChildren<{
  isLoading?: boolean,
  title?: string,
}>

const ModuleLoader: React.FC<Props> = (props) => {
  const { children, isLoading } = props

  const t = useAppTranslation()
  const title = props.title || t('units.PageLoader.moduleIsLoading')

  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <div className={styles.loaderWrapper}>
          <AppSpin>{title}</AppSpin>
        </div>
      )}
      <div
        className={
          classNames(styles.childrenWrapper, {
            [styles['childrenWrapperHidden']]: isLoading
          })
        }
      >
        {children}
      </div>
    </div>
  )
}

export default ModuleLoader
