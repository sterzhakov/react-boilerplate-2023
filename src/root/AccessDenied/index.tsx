// Libs
import { useNavigate } from 'react-router'
import { useCallback } from 'react'

// Components
import { Result, Button, ButtonProps } from 'src/antd'
// Components/units
import PageContent from 'src/units/PagePaper'
import PageLayout from 'src/units/PageLayout'
import PageTitle from 'src/units/PageTitle'

// Initializers
import { AppRoutes } from 'src/initializers/createRoutes'

// Hooks
import { useAppTranslation } from 'src/hooks/translation'

// Constants

const AccessDenied: React.FC = () => {

  const navigate = useNavigate()
  const t = useAppTranslation()

  const handleHomeButtonClick =
  useCallback<NonNullable<ButtonProps['onClick']>>(() => {
    navigate(AppRoutes.home.path);
  }, []);

  return (
    <PageLayout>
      <PageTitle>{t('root.AccessDenied.title')}</PageTitle>
      <PageContent>
        <Result
          status='404'
          title={t('root.AccessDenied.resultTitleButton')}
          subTitle={t('root.AccessDenied.resultTitleDescription')}
          extra={
            <Button type='primary' onClick={handleHomeButtonClick}>
              {t('root.AccessDenied.resultTitleButton')}
            </Button>
          }
        />
      </PageContent>
    </PageLayout>
  )
}

export default AccessDenied
