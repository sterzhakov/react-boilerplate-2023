// Libs
import { Form, Input, Button, FormProps, ButtonProps } from 'src/antd'

// Hooks
import { useFormInputs } from './index.hooks'

// Constants
import { FormValues } from './index.hooks'
import { useAppTranslation } from 'src/hooks/translation'

export type Props = {
  formProps: FormProps<FormValues>
  buttonProps: ButtonProps,
}

const PostsForm: React.FC<Props> = (props) => {
  const { formProps = {}, buttonProps = {} } = props

  const {
    children: buttonPropsChildren,
    ...buttonPropsRest
  } = buttonProps

  const formInputs = useFormInputs()
  const t = useAppTranslation()

  return (
    <Form<FormValues>
      layout='vertical'
      autoComplete='off'
      {...formProps}
    >
      <Form.Item {...formInputs.userId}>
        <Input disabled />
      </Form.Item>
      <Form.Item {...formInputs.title}>
        <Input />
      </Form.Item>
      <Form.Item {...formInputs.body}>
        <Input.TextArea showCount rows={5} />
      </Form.Item>

      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          {...buttonPropsRest}
        >
          {buttonPropsChildren || t('entities.Posts.Form.saveButton.title')}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default PostsForm
