// Styles
import styles from './index.module.scss'

// Libs
import { Alert } from 'src/antd'
import React, { PropsWithChildren } from 'react'
import classNames from 'classnames'

// Helpers
import { createAppError, RawAppError } from 'src/helpers/rtk/createAppError'

const ErrorDescriptions: React.FC<{ descriptions: string[] }> = (props) => {
  const { descriptions } = props
  return (
    <>
      {descriptions.map((description, index) => {
        const isNotLastIteration = index < descriptions.length - 1
        return (
          <React.Fragment key={index}>
            {description}
            {isNotLastIteration && (
              <>
                <br />
                <br />
              </>
            )}
          </React.Fragment>
        )
      })}
    </>
  )
}

export type Props = PropsWithChildren<{
  error?: RawAppError
}>

const RequestErrorAlert: React.FC<Props> = (props) => {
  const { error, children } = props
  const isErrorExists = error !== undefined;
  const appError = isErrorExists ? createAppError(error) : null

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.wrapperWithError]: isErrorExists
      })}
    >
      {isErrorExists && appError && (
        <Alert
          className={styles.alert}
          message={appError.title}
          description={
            <ErrorDescriptions
              descriptions={appError.descriptions}
            />
          }
          type='error'
          closable
        />
      )}
      {children}
    </div>
  )
}

export default RequestErrorAlert
