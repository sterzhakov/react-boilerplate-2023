// Libs
import { PropsWithChildren } from 'react'
import { App } from 'src/antd'
import type { MessageInstance } from 'antd/es/message/interface'
import type { ModalStaticFunctions } from 'antd/es/modal/confirm'
import type { NotificationInstance } from 'antd/es/notification/interface'

// Local inits
let message: MessageInstance
let notification: NotificationInstance
let modal: Omit<ModalStaticFunctions, 'warn'>
let showSuccessQueryNotification: () => void

const AntdApi: React.FC<PropsWithChildren> = () => {
  const staticFunction = App.useApp()

  message = staticFunction.message
  modal = staticFunction.modal
  notification = staticFunction.notification

  showSuccessQueryNotification = () => {
    notification.success({ message: 'Success!' })
  }

  return null
}

export default AntdApi

export { message, notification, modal, showSuccessQueryNotification }
