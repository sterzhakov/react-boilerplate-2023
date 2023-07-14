// Libs
import { PropsWithChildren } from 'react'
import { useNavigate } from 'react-router'

// Requests
import { usePostsCreateMutation } from 'src/requests/business/posts'

// Hooks
import { useAppTranslation } from 'src/hooks/translation'

// Entities
import PostsForm from 'src/entities/Posts/Form'

// Initializers
import { AppRoutes } from 'src/initializers/createRoutes'

// Root
import * as AntdApi from 'src/root/AntdApi'

// Local types
export type Props = PropsWithChildren

const FormCreate: React.FC<Props> = () => {
  // Initial effects
  const navigate = useNavigate()
  const t = useAppTranslation()
  const [createPost, { isLoading }] = usePostsCreateMutation()
  return (
    <PostsForm
      buttonProps={{
        loading: isLoading,
        children: t('pages.PostsCreate.modules.FormCreate.saveButton')
      }}
      formProps={{
        onFinish: async (formValues) => {
          const result = await createPost(formValues)
          if ('error' in result) return
          AntdApi.showSuccessQueryNotification()
          navigate(AppRoutes.postsList.path)
        }
      }}
    />
  )
}

export default FormCreate
