// Libs
import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit'

import * as AntdApi from 'src/root/AntdApi'

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware =
  (_api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const { payload } = action
      AntdApi.notification.error({
        message: `Server error: ${payload.status || 'undefined'}`,
        description: JSON.stringify(payload?.data || {}),
      })
    }

    return next(action)
  }
