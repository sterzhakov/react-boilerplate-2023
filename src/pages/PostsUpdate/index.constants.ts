// Local types

import { FormItemProps } from 'src/antd'
import { Post } from 'src/helpers/store/businessApi'

export type FormValues = {
  [FormKeys.body]: Post['body'],
  [FormKeys.title]: Post['title'],
  [FormKeys.userId]: Post['userId'],
}

export enum FormKeys {
  title = 'title',
  body = 'body',
  userId = 'userId',
}

// Local constants

export const DRAWER_WIDTH = 700


export const FORM_INPUTS: Record<FormKeys, FormItemProps>   = {
  [FormKeys.title]: {
    name: FormKeys.title,
    label: 'Title',
    rules: [{ required: true }],
  },
  [FormKeys.userId]: {
    name: FormKeys.userId,
    label: 'UserId',
    rules: [{ required: true }],
    initialValue: 1
  },
  [FormKeys.body]: {
    name: FormKeys.body,
    label: 'Body',
    rules: [{ required: true }],
  },
}
