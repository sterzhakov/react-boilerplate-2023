// Libs
import { Drawer, Typography } from 'src/antd'
import { useParams, useNavigate } from 'react-router'

// Hooks
import { useAppTranslation } from 'src/hooks/translation'

// Initializers
import { AppRoutes } from 'src/initializers/createRoutes'
import { PostsUpdateRoute } from 'src/initializers/createRoutes/routes/posts'

// Constants
import { DRAWER_WIDTH } from './index.constants'
import UpdateForm from './modules/FormUpdate'

// Local helpers

// Local constants
const PostsUpdate: React.FC = () => {
  const navigate = useNavigate()
  const t = useAppTranslation()

  // Initial effects
  const routeParamsRaw = useParams<PostsUpdateRoute['routeParams']>()
  const routeParams = AppRoutes.postsUpdate.mapPathParamsToApp(routeParamsRaw)

  if (!routeParams) return null

  return (
    <Drawer
      open={true}
      width={DRAWER_WIDTH}
      onClose={() => {
        navigate(AppRoutes.postsList.path)
      }}
    >
      <Typography.Title level={3}>
        {t('pages.PostsUpdate.title')}
      </Typography.Title>
      <br />
      <UpdateForm postId={routeParams.postId} />
    </Drawer>
  )
}

export default PostsUpdate
