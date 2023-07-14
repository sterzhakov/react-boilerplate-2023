// Libs
import { FormItemProps } from 'src/antd'

// Helpers
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

  const formInputs: Record<FormKeys, FormItemProps>  = {
    [FormKeys.title]: {
      name: FormKeys.title,
      label: t('entities.Posts.Form.inputs.title.label'),
      rules: [{ required: true }],
    },
    [FormKeys.userId]: {
      name: FormKeys.userId,
      label: t('entities.Posts.Form.inputs.userId.label'),
      rules: [{ required: true }],
    },
    [FormKeys.body]: {
      name: FormKeys.body,
      label: t('entities.Posts.Form.inputs.body.label'),
      rules: [{ required: true }],
    },
  }

  return formInputs
}
