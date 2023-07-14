// Styles
import styles from './index.module.scss'

// Libs
import { PropsWithChildren } from 'react'
import { Spin, SpinProps } from 'src/antd'
import classNames from 'classnames'

// Local types
type Props = PropsWithChildren<SpinProps>

const AppSpin: React.FC<Props> = ({ children, className, ...spinProps }) => {
  return (
    <div className={styles.wrapper}>
      <Spin
        {...spinProps}
        className={classNames(styles.spin, className)}
      />
      <div className={styles.content}>
        {children}
      </div>
    </div>

  )
}

export default AppSpin
