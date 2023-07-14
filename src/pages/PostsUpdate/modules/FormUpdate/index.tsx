// Libs
import { usePostsFindOneQuery, usePostsUpdateMutation }
  from 'src/requests/business/posts'
import { useNavigate } from 'react-router'

// Hooks
import { useAppTranslation } from 'src/hooks/translation'

// Initializers
import { AppRoutes } from 'src/initializers/createRoutes'

// Entities
import PostsForm from 'src/entities/Posts/Form'

// Constants
import * as AntdApi from 'src/root/AntdApi'
import SiderLoader from 'src/units/SiderLoader'

// Local types
export type Props = {
  postId: number,
}

const FormUpdate: React.FC<Props> = (props) => {
  const { postId } = props

  const navigate = useNavigate()
  const t = useAppTranslation()

  const { data: postFindOneData, isLoading: isPostFindOneLoading } =
    usePostsFindOneQuery({ id: postId })
  const [updatePost, { isLoading: isPostUpdateLoading }] =
    usePostsUpdateMutation()

  if (isPostFindOneLoading) {
    return (
      <SiderLoader />
    )
  }

  return (
    <PostsForm
      buttonProps={{
        loading: isPostUpdateLoading,
        children: t('pages.PostsUpdate.modules.FormUpdate.saveButton')
      }}
      formProps={{
        initialValues: postFindOneData?.response,
        onFinish: async (formValues) => {
          const result = await updatePost({
            id: postId,
            ...formValues
          })
          if ('error' in result) return
          AntdApi.showSuccessQueryNotification()
          navigate(AppRoutes.postsList.path)
        }
      }}
    />
  )
}

export default FormUpdate
