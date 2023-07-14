// Libs
import { Form, Button, FormProps, ButtonProps, Select } from 'src/antd'

// Hooks
import { createLocaleOptions, FormValues, useFormInputs } from './index.hooks'
import { useAppTranslation } from 'src/hooks/translation'
import { DEFAULT_LOCALE } from 'src/initializers/createTranslations'

export type Props = {
  formProps: FormProps<FormValues>
  buttonProps: ButtonProps,
}

const SettingsForm: React.FC<Props> = (props) => {
  const { formProps = {}, buttonProps = {} } = props

  const { children: buttonPropsChildren, ...buttonPropsRest } = buttonProps

  const formInputs = useFormInputs()
  const localeOptions = createLocaleOptions()
  const t = useAppTranslation()

  return (
    <Form<FormValues>
      layout='vertical'
      autoComplete='off'
      {...formProps}
      initialValues={{
        locale: DEFAULT_LOCALE,
        ...formProps.initialValues
      }}
    >
      <Form.Item
        {...formInputs.locale}
      >
        <Select options={localeOptions} />
      </Form.Item>
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          {...buttonPropsRest}
        >
          {buttonPropsChildren || t('entities.Settings.Form.saveButton.title')}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SettingsForm
