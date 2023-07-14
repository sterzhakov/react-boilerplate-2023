// Local types
import { FormItemProps } from 'src/antd'
import { DefaultOptionType } from 'antd/es/select'

// Hooks
import { useAppTranslation } from 'src/hooks/translation'
import { AppLocales } from 'src/initializers/createTranslations'


export type FormValues = {
  [FormKeys.locale]: AppLocales,
}

export enum FormKeys {
  locale = 'locale',
}

// Local constants

export type LocaleOption = DefaultOptionType & { value: AppLocales }

export type CreatLocaleOptionsProps = void
export const createLocaleOptions = (_props: CreatLocaleOptionsProps) => {
  const LOCALE_OPTIONS: LocaleOption[] = [
    {
      label: 'English',
      value: AppLocales.en,
    },
    {
      label: 'Русский',
      value: AppLocales.ru,
    },
  ]

  return LOCALE_OPTIONS
}

export const useFormInputs = () => {
  const t = useAppTranslation()

  const FORM_INPUTS: Record<FormKeys, FormItemProps> = {
    [FormKeys.locale]: {
      name: FormKeys.locale,
      label: t('pages.SettingsUpdate.modules.LocalForm.inputs.locale.title'),
      rules: [{ required: true }],
    },
  }
  return FORM_INPUTS
}


