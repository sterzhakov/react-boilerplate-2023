// Libs
import { FormItemProps } from 'src/antd'
import { Post } from 'src/helpers/store/businessApi'

// Hooks
import { useAppTranslation } from 'src/hooks/translation'

// Local types

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

// Local helpers

export function useFormInputs() {
  const t = useAppTranslation()

  const FORM_INPUTS: Record<FormKeys, FormItemProps>   = {
    [FormKeys.title]: {
      name: FormKeys.title,
      label: t('entities.Posts.Search.inputs.title.label'),
    },
    [FormKeys.userId]: {
      name: FormKeys.userId,
      label: t('entities.Posts.Search.inputs.userId.label'),
    },
    [FormKeys.body]: {
      name: FormKeys.body,
      label: t('entities.Posts.Search.inputs.body.label'),
    },
  }
  return FORM_INPUTS
}
