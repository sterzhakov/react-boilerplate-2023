// Libs
import { Drawer, Typography } from 'src/antd'
import { useNavigate } from 'react-router'

// Hooks
import { useAppTranslation } from 'src/hooks/translation'

// Initializers
import { AppRoutes } from 'src/initializers/createRoutes'

// Constants
import { DRAWER_WIDTH } from './index.constants'
import FormCreate from './modules/FormCreate'
import ProtectedRoute from 'src/root/ProtectedRoute'

// Local constants

const PostsCreate: React.FC = () => {
  // Initial effects
  const navigate = useNavigate()
  const t = useAppTranslation()

  return (
    <Drawer
      open={true}
      width={DRAWER_WIDTH}
      onClose={() => {
        navigate(AppRoutes.postsList.path)
      }}
    >
      <ProtectedRoute>
        <Typography.Title level={3}>
          {t('pages.PostsCreate.title')}
        </Typography.Title>
        <br />
        <FormCreate />
      </ProtectedRoute>
    </Drawer>
  )
}

export default PostsCreate
