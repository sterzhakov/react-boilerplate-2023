// Styles
// import styles from './index.constants'

// Libs
import { Form, Input, Button, FormProps, ButtonProps, Row, Col } from 'src/antd'

// Hooks
import { FormValues, useFormInputs } from './index.hooks'
import { useAppTranslation } from 'src/hooks/translation'

// Constants
import SearchWrapper from 'src/units/SearchWrapper'

// Local constants
const COL_MEDIA_QUERY = { xs: 24, lg: 6 }

// Local types
export type Props = {
  formProps: FormProps<FormValues>
  buttonProps?: ButtonProps,
}

const PostsSearch: React.FC<Props> = (props) => {
  const { formProps = {}, buttonProps = {} } = props

  const { children: buttonPropsChildren, ...buttonPropsRest } = buttonProps

  const formInputs = useFormInputs()
  const t = useAppTranslation()

  return (
    <SearchWrapper>
      <Form<FormValues>
        layout='vertical'
        autoComplete='off'
        {...formProps}
      >
        <Row gutter={24} justify={'space-between'} align='bottom'>
          <Col {...COL_MEDIA_QUERY}>
            <Form.Item {...formInputs.userId}>
              <Input allowClear />
            </Form.Item>
          </Col>
          <Col {...COL_MEDIA_QUERY}>
            <Form.Item {...formInputs.title}>
              <Input allowClear />
            </Form.Item>
          </Col>
          <Col {...COL_MEDIA_QUERY}>
            <Form.Item {...formInputs.body}>
              <Input allowClear />
            </Form.Item>
          </Col>
          <Col {...COL_MEDIA_QUERY}>
            <Form.Item>
              <Button
                block
                type='primary'
                htmlType='submit'
                {...buttonPropsRest}
              >
                {buttonPropsChildren || t('entities.Posts.Search.searchButton')}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </SearchWrapper>
  )
}

export default PostsSearch
