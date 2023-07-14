// Libs
import { Drawer, Typography } from 'src/antd'
import { useParams, useNavigate } from 'react-router'

// Hooks
import { useAppTranslation } from 'src/hooks/translation'

// Initializers
import { AppRoutes } from 'src/initializers/createRoutes'

// Constants
import { DRAWER_WIDTH } from './index.constants'

// Initializers
import { PostsFindOneRoute } from 'src/initializers/createRoutes/routes/posts'
import Descriptions from './modules/Descriptions'

// Local helpers

// Local constants
const PostsFindOne: React.FC = () => {
  const navigate = useNavigate()
  const t = useAppTranslation()

  // Initial effects
  const routeParamsRaw = useParams<PostsFindOneRoute['routeParams']>()
  const routeParams = AppRoutes.postsShow.mapPathParamsToApp(routeParamsRaw)

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
        {t('pages.PostsFindOne.title')}
      </Typography.Title>
      <br />
      <Descriptions postId={routeParams.postId} />
    </Drawer>
  )
}

export default PostsFindOne
